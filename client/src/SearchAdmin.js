import React from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
import SearchTable from "./SearchTable";

class SearchAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drugname: "",
            
            
            search: [],
            tableLoading: false,
            tableError: false,
            deleteSuccess: false
        };

        this.resetFormState = this.resetFormState.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleToggleCheckbox = this.handleToggleCheckbox.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEditchemist = this.handleEditchemist.bind(this);
        this.handleDeletechemist = this.handleDeletechemist.bind(this);
    }

    componentDidMount() {
        this.fetchchemist();
    }

    fetchchemist() {
        this.setState({ tableLoading: true, tableError: false });

        axios
            .get("/api/chemist")
            .then(response => {
                this.setState({
                    chemist: response.data.map(data => ({
                        ...data,
                        drugname: data.drug_name,
                        
                    })),
                    tableLoading: false,
                    tableError: false
                });
            })
            .catch(error => {
                this.setState({
                    chemist: [],
                    tableLoading: false,
                    tableError: true
                });
            });
    }

    resetFormState() {
        this.setState({
            drugname: "",
            
            
        });
    }

    isValid() {
        const { validationErrors, isValid } = this.validateFormInput(
            this.state
        );

        if (!isValid) {
            this.setState({ validationErrors });
        }

        return isValid;
    }

    validateFormInput(data) {
        const validationErrors = {};
        const {
           drugname,
        } = data;

        if (!drugname) {
            validationErrors.title = "This field is required";
        }

       
        return {
            validationErrors,
            isValid: Object.keys(validationErrors).length === 0
        };
    }

    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({ [name]: value });
    }

    handleToggleCheckbox(e) {
        const checked = e.target.checked;
        const value = e.target.value;

        
    }

    handleSubmit(e) {
        e.preventDefault();

        const {
            id,
            drugname,
            editing,
            chemist,
        } = this.state;

        if (this.isValid()) {
            this.setState({
                validationErrors: {},
                formSubmitting: true,
                formSuccess: false,
                formError: false
            });

            if (editing) {
                // Existing record - update
                axios
                    .put(`/api/chemist/${id}`, {
                        id,
                        drugname,
                    })
                    .then(response => {
                        this.resetFormState();

                        const index = chemist.findIndex(c => c.id === id);

                        this.setState({
                            formSuccess: true,
                            chemist: [
                                ...chemist.slice(0, index),
                                {
                                    id,
                                    drugname,
                                },
                                ...chemist.slice(index + 1)
                            ]
                        });
                    })
                    .catch(error => {
                        this.setState({
                            validationErrors: {},
                            formSubmitting: false,
                            formSuccess: false,
                            formError: true
                        });
                    });
            } else {
                // New record - Save
                axios
                    .post("/api/chemist", {
                        drugname,
                        
                    })
                    .then(response => {
                        this.resetFormState();
                        this.setState({
                            formSuccess: true,
                            chemist: [
                                ...chemist,
                                {
                                    id: response.data,
                                    drugname
                                }
                            ]
                        });
                    })
                    .catch(error => {
                        this.setState({
                            validationErrors: {},
                            formSubmitting: false,
                            formSuccess: false,
                            formError: true
                        });
                    });
            }
        }
    }

    handleEditchemist(chemist) {
        return () => {
            this.setState({
                ...chemist,
                
            });
        };
    }

    handleDeletechemist(chemist, search) {
        return () => {
            const { id, drugname } = search;

            // eslint-disable-next-line no-restricted-globals
            if (confirm(`Are you sure you want to delete '${drugname}'?`)) {
                axios
                    .delete(`/api/chemist/${id}`)
                    .then(response => {
                        const index = chemist.findIndex(c => c.id === id);

                        this.setState({
                            chemist: [
                                ...chemist.slice(0, index),
                                ...chemist.slice(index + 1)
                            ],
                            deleteSuccess: true,
                            tableError: false
                        });
                    })
                    .catch(error => {
                        this.setState({
                            deleteSuccess: false,
                            tableError: true
                        });
                    });
            }
        };
    }

    render() {
        const {
            id,
            drugname,
            editing,
            formSubmitting,
            validationErrors,
            formSuccess,
            formError,
            movies,
            tableLoading,
            tableError,
            deleteSuccess
        } = this.state;

        return (
            <div className="drgls-search-admin">
                <h1>Search</h1>
                <h3>{editing ? "Edit drug" : "Add drug"}</h3>
                <SearchForm
                    id={id}
                   drugname={drugname}
                    
                    formSubmitting={formSubmitting}
                    validationErrors={validationErrors}
                    formSuccess={formSuccess}
                    formError={formError}
                    handleChange={this.handleChange}
                    handleToggleCheckbox={this.handleToggleCheckbox}
                    resetFormState={this.resetFormState}
                    handleSubmit={this.handleSubmit}
                />
                <SearchTable
                    drugname={drugname}
                    tableLoading={tableLoading}
                    tableError={tableError}
                    deleteSuccess={deleteSuccess}
                    onEditdrugname={this.handleEditdrugname}
                    onDeletedrugname={this.handleDeletedrugname}
                />
            </div>
        );
    }
}

export default SearchAdmin;