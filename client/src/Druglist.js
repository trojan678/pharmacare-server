import React from "react";
import axios from "axios";
import Drugs from './Drugs';
import Loading from "./Loading";
import Error from "./Error";

class DrugList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            medicinelist: [],
            loading: false,
            error: false
        };
    }

    componentDidMount() {
        this.fetchMedicinelist();
    }

    fetchMedicinelist() {
        this.setState({ loading: true, error: false });

        axios
            .get("/api/chemist")
            .then(response => {
                this.setState({
                    medicinelist: response.data,
                    loading: false,
                    error: false
                });
            })
            .catch(error => {
                this.setState({
                    medicinelist: [],
                    loading: false,
                    error: true
                });
            });
    }

    render() {
        const { medicinelist, loading, error } = this.state;

         if (loading) {
             return <Loading />;
       }

         if (error) {
             return <Error />;
         }

        return (
            <div className="drgls-container">
                <div className="drgls-Drug-list">
                    {medicinelist.map(drug => (
                        <Drugs key={drug.id} drug={drug} />
                    ))}
                </div>
            </div>
        );
    }
}

export default DrugList;