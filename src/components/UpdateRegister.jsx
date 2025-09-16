import React, { useEffect, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./Css/Register.css";

const UpdateRegister = () => {
    const [loading, setLoading] = useState(true);
    const { register, control, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            relatives: [],
        },
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "relatives",
    });

    const navigate = useNavigate();

    // ✅ Fetch saved relatives from backend
    useEffect(() => {
        const fetchRelatives = async () => {
            try {
                const token = localStorage.getItem("token");

                const res = await fetch("http://localhost:3000/api/user/getAllRelatives", {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    },
                });

                const result = await res.json();
                if (res.ok) {
                    // Pre-fill form with relatives
                    reset({ relatives: result.relatives || [] });
                } else {
                    alert("Failed to fetch relatives ❌\n" + result.message);
                }
            } catch (err) {
                console.error(err);
                alert("Error fetching relatives");
            } finally {
                setLoading(false);
            }
        };

        fetchRelatives();
    }, [reset]);

    // ✅ Submit updated relatives
    const onSubmit = async (data) => {
        try {
            const token = localStorage.getItem("token");

            const res = await fetch("http://localhost:3000/api/user/UpdateRegister", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (res.ok) {
                alert("Contacts updated successfully ✅");
                navigate("/Mainpage");
            } else {
                alert("Update failed ❌\n" + result.message);
            }
        } catch (err) {
            console.error(err);
            alert("Something went wrong.");
        }
    };

    if (loading) return <p>Loading contacts...</p>;

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit(onSubmit)} className="register-form">
                <h2>Update Contacts</h2>

                {fields.map((field, index) => (
                    <div key={field.id} className="relative-block">
                        <h4>Contact {index + 1}</h4>

                        <label>Name</label>
                        <input
                            type="text"
                            className="input-field"
                            {...register(`relatives.${index}.name`, { required: "Name is required" })}
                            defaultValue={field.name}
                        />
                        {errors.relatives?.[index]?.name && (
                            <p className="error-msg">{errors.relatives[index].name.message}</p>
                        )}

                        <label>Phone</label>
                        <input
                            type="text"
                            className="input-field"
                            {...register(`relatives.${index}.phone`, { required: "Phone is required" })}
                            defaultValue={field.phone}
                        />
                        {errors.relatives?.[index]?.phone && (
                            <p className="error-msg">{errors.relatives[index].phone.message}</p>
                        )}

                        <label>Email</label>
                        <input
                            type="text"
                            className="input-field"
                            {...register(`relatives.${index}.email`, {
                                required: "Email is required",
                                pattern: {
                                    value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                                    message: "Invalid email",
                                },
                            })}
                            defaultValue={field.email}
                        />
                        {errors.relatives?.[index]?.email && (
                            <p className="error-msg">{errors.relatives[index].email.message}</p>
                        )}

                        {fields.length > 1 && (
                            <button type="button" className="remove-btn" onClick={() => remove(index)}>
                                ❌ Remove
                            </button>
                        )}
                        <hr />
                    </div>
                ))}

                <button
                    type="button"
                    className="add-btn"
                    onClick={() => append({ name: "", phone: "", email: "" })}
                >
                    ➕ Add Relative
                </button>

                <button type="submit" className="submit-btn">Update</button>
            </form>
        </div>
    );
};

export default UpdateRegister;
