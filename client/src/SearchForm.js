import React from "react";

function SearchForm({
    id,
    Drug_name,

    formSubmitting,
    validationErrors,
    formSuccess,
    formError,
    handleChange,
    handleToggleCheckbox,
    resetFormState,
    handleSubmit
}) {
    const disabled =
        !id ||
        !Drug_name ||

        (Array.isArray(Drug_name) && Drug_name.length === 0);

    return (
        <form className="drgls-form" onSubmit={handleSubmit}>
            {formSuccess && (
                <p className="drgls-alert mvls-alert-success">
                    Form submitted successfully.
                </p>
            )}
            {formError && (
                <p className="drgls-alert drgls-alert-error">
                    Sorry, error submitting form. Please retry.
                </p>
            )}
            <div className="drgls-form-row">
                <div className="drgls-form-col">
                    <label htmlFor="Drug_name">Drug_name</label>
                    <div className="drgls-form-input-group">
                        <input
                            type="text"
                            name="Drug_name"
                            className={
                                validationErrors.title ? "has-error" : ""
                            }
                            autoComplete="off"
                            value={Drug_name}
                            onChange={handleChange}
                            disabled={formSubmitting}
                        />
                        {validationErrors.title && (
                            <span className="drgls-form-input-error">
                                {validationErrors.title}
                            </span>
                        )}
                    </div>
                </div>
                <div className="drgls-form-col">
                    <label htmlFor="id">id</label>
                    <div className="drgls-form-input-group">
                        <input
                            type="number"
                            name="id"
                            className={
                                validationErrors.releaseYear ? "has-error" : ""
                            }
                            autoComplete="off"
                            value={id}
                            onChange={handleChange}
                            disabled={formSubmitting}
                        />
                        {validationErrors.releaseYear && (
                            <span className="drgls-form-input-error">
                                {validationErrors.releaseYear}
                            </span>
                        )}
                    </div>
                </div>
            </div>

            <button
                className="drgls-btn drgls-btn-form"
                type="submit"
                disabled={disabled || formSubmitting}
            >
                Submit
            </button>
            <button
                className="drgls-btn drgls-btn-form"
                type="reset"
                onClick={resetFormState}
                disabled={formSubmitting}
            >
                Reset
            </button>
        </form >
    );
}

export default SearchForm;