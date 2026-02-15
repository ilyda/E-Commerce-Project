import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        formState: { isSubmitting },
    } = useForm();

    const [roles, setRoles] = useState([]);
    const selectedRole = watch("role_id");

    useEffect(() => {
        const fetchRoles = async () => {
            try {
                const res = await api.get("/roles");
                setRoles(res.data);
            } catch {
                toast.error("Roles alınamadı");
            }
        };
        fetchRoles();
    }, []);

    const onSubmit = async (data) => {
        try {
            let payload = {
                name: data.name,
                email: data.email,
                password: data.password,
                role_id: Number(data.role_id),
            };

            if (Number(data.role_id) === 3) {
                payload.store = {
                    name: data.store_name,
                    phone: data.store_phone,
                    tax_no: data.tax_no,
                    bank_account: data.bank_account,
                };
            }

            await api.post("/signup", payload);

            toast.warn(
                "You need to click link in email to activate your account!"
            );

            navigate(-1);
        } catch (err) {
            toast.error(err.response?.data?.message || "Signup failed");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
                <div className="inline-flex items-center gap-2 mb-2 mt-10">
                    <p className="prata-regular text-3xl">Register</p>
                    <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
                </div>
                <input
                    type="email"
                    placeholder="Email"
                    {...register("email", {
                        required: true,
                        pattern: /^\S+@\S+$/i,
                    })}
                    className="w-full px-3 py-2 border border-gray-800"
                />

                <input
                    type="password"
                    placeholder="Password"
                    {...register("password", { required: true })}
                    className="w-full px-3 py-2 border border-gray-800"
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full px-3 py-2 border border-gray-800"
                    {...register("confirm", {
                        validate: (val) =>
                            val === watch("password") || "Passwords not match",
                    })}
                />
                <select className="w-full px-3 py-2 border border-gray-800" {...register("role_id")}>
                    {roles.map((r) => (
                        <option key={r.id} value={r.id}>
                            {r.name}
                        </option>
                    ))}
                </select>

                {Number(selectedRole) === 3 && (
                    <div className="space-y-4 border-t pt-4">

                        <input
                            placeholder="Store Name"
                            className="w-full px-3 py-2 border border-gray-800"
                            {...register("store_name", { minLength: 3 })}
                        />

                        <input
                            placeholder="Store Phone"
                            className="w-full px-3 py-2 border border-gray-800"
                            {...register("store_phone", {
                                pattern: {
                                    value: /^(\+90|0)?5\d{9}$/,
                                    message: "TR phone invalid",
                                },
                            })}
                        />

                        <input
                            placeholder="Tax No TXXXXVXXXXXX"
                            className="w-full px-3 py-2 border border-gray-800"
                            {...register("tax_no", {
                                pattern: {
                                    value: /^T\d{4}V\d{6}$/,
                                    message: "Tax format wrong",
                                },
                            })}
                        />

                        <input
                            placeholder="IBAN"
                            className="w-full px-3 py-2 border border-gray-800"
                            {...register("bank_account", {
                                pattern: {
                                    value: /^TR\d{24}$/,
                                    message: "IBAN invalid",
                                },
                            })}
                        />
                    </div>
                )}



                <button
                    disabled={isSubmitting}
                    className="w-full bg-blue-500 text-white py-3 rounded-md font-semibold disabled:opacity-50"
                >
                    {isSubmitting ? "Creating..." : "Signup"}
                </button>
            </form>
        </div>
    );
};

export default Register;
