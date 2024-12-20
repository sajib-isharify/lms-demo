import React, { useState, useCallback } from "react";
import { useForm, Controller } from "react-hook-form";
import InputText from "./InputText";
import ErrorMessage from "./ErrorMessage";

const MyForm = () => {
  const [storeUsername, setStoreUsername] = useState("");
  const [updateUsername, setUpdateUsername] = useState("defaultUsername");
  const [storeError, setStoreError] = useState("");
  const [updateError, setUpdateError] = useState("");

  const {
    control: storeControl,
    handleSubmit: handleStoreSubmit,
    formState: { errors: storeErrors },
  } = useForm({
    defaultValues: {
      username: "",
    },
  });

  const {
    control: updateControl,
    handleSubmit: handleUpdateSubmit,
    formState: { errors: updateErrors },
  } = useForm({
    defaultValues: {
      username: "defaultUsername",
    },
  });

  const handleNormalStoreSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!storeUsername) {
        setStoreError("Username is required");
      } else {
        setStoreError("");
        console.log("Regular Store Form Data:", { storeUsername });
      }
    },
    [storeUsername]
  );

  const handleNormalUpdateSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!updateUsername) {
        setUpdateError("Username is required");
      } else {
        setUpdateError("");
        console.log("Regular Update Form Data:", { updateUsername });
      }
    },
    [updateUsername]
  );

  const handleRHFStoreSubmit = useCallback((data) => {
    console.log("React Hook Form Store Data:", data);
  }, []);

  const handleRHFUpdateSubmit = useCallback((data) => {
    console.log("React Hook Form Update Data:", data);
  }, []);

  return (
    <div className="space-y-8">
      <form onSubmit={handleNormalStoreSubmit} className="space-y-4">
        <h2>Regular Store Form</h2>
        <InputText
          id="storeUsername"
          placeholder="Enter your username"
          value={storeUsername}
          onChange={(e) => setStoreUsername(e.target.value)}
          error={storeError}
        />

        <ErrorMessage message={storeError} />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          Submit Regular Store Form
        </button>
      </form>

      <form onSubmit={handleNormalUpdateSubmit} className="space-y-4">
        <h2>Regular Update Form</h2>
        <InputText
          id="updateUsername"
          placeholder="Enter your username"
          value={updateUsername}
          onChange={(e) => setUpdateUsername(e.target.value)}
          error={updateError}
        />

        <ErrorMessage message={updateError} />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          Submit Regular Update Form
        </button>
      </form>

      <form onSubmit={handleStoreSubmit(handleRHFStoreSubmit)} className="space-y-4">
        <h2>React Hook Form Store</h2>
        <Controller
          name="username"
          control={storeControl}
          rules={{ required: "Username is required" }}
          render={({ field }) => (
            <>
              <InputText id="storeUsername" placeholder="Enter your username" {...field} error={storeErrors.username?.message} />

              <ErrorMessage message={storeErrors.username?.message} />
            </>
          )}
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          Submit React Hook Form Store
        </button>
      </form>

      <form onSubmit={handleUpdateSubmit(handleRHFUpdateSubmit)} className="space-y-4">
        <h2>React Hook Form Update</h2>
        <Controller
          name="username"
          control={updateControl}
          rules={{ required: "Username is required" }}
          render={({ field }) => (
            <>
              <InputText id="updateUsername" placeholder="Enter your username" {...field} error={updateErrors.username?.message} />

              <ErrorMessage message={updateErrors.username?.message} />
            </>
          )}
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          Submit React Hook Form Update
        </button>
      </form>
    </div>
  );
};

export default MyForm;
