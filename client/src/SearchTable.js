import React from "react";

function SearchTable({
    search,
    tableLoading,
    tableError,
    deleteSuccess,
    onEditMedicine,
    onDeleteMedicine
}) {
    if (tableLoading) {
        return <p className="drgls-table-loading">Loading medicine...</p>;
    }

    return (
        <div className="drgls-table">
            {deleteSuccess && (
                <p className="drgls-alert drgls-alert-success">
                    Record deleted successfully.
                </p>
            )}
            {tableError && (
                <p className="drgls-alert drgls-alert-error">
                    Sorry, a server error occurred. Please retry.
                </p>
            )}
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Drug_name</th>
                        
                    </tr>
                </thead>
                {search.length === 0 && (
                    <tbody>
                        <tr>
                            <td colSpan="8" className="drgls-no-data">
                                No data
                            </td>
                        </tr>
                    </tbody>
                )}
                {search.length > 0 && (
                    <tbody>
                        {search.map((chemist, index) => {
                            const {
                                id,
                                Drug_name,
                                
                            } = chemist;

                            return (
                                <tr key={id}>
                                    <td>{index + 1}</td>
                                    <td>{Drug_name}</td>
                                    
                                    <td>
                                        <span
                                            className="drgls-table-link"
                                            onClick={onEditMedicine(chemist)}
                                        >
                                            Edit
                                        </span>
                                        &nbsp;&nbsp;|&nbsp;&nbsp;
                                        <span
                                            className="drgls-table-link"
                                            onClick={onDeleteMedicine(
                                                chemist,
                                                search
                                            )}
                                        >
                                            Delete
                                        </span>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                )}
            </table>
        </div>
    );
}

export default SearchTable;