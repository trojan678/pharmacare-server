import React from "react";
import axios from "axios";
import Loading from "./Loading";
import Error from "./Error";


class SearchDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchDetails: [],

            loading: false,
            error: false
        };
    }

    componentDidMount() {
        this.fetchSearchDetails();
    }


    fetchSearchDetails() {
        this.setState({ loading: true, error: false });

        const { Id } = this.props;
        const searchDetailsPromise = axios.get(`/api/chemist/${Id}`);


        axios
            .all([searchDetailsPromise])
            .then(
                axios.spread((searchDetailsResponse) => {
                    this.setState({
                        searchDetails: searchDetailsResponse.data,

                        loading: false,
                        error: false
                    });
                })
            )
            .catch(error => {
                this.setState({
                    searchDetails: [],

                    loading: false,
                    error: true
                });
            });
    }

    render() {
        const { searchDetails, loading, error } = this.state;

        if (loading) {
            return <Loading />;
        }

        if (error) {
            return <Error />;
        }

        if (searchDetails.length !== 1) {
            return (
                <Error message="Sorry, the medicine is not available. Not available." />
            );
        }
    }}
    export default SearchDetails;