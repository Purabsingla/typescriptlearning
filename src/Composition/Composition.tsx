import { ChangeEvent } from "react";

interface props {
  formData: { [key: string]: string };
  HandleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  HandleFormChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
const Composition: React.FC<props> = ({
  formData,
  HandleFormChange,
  HandleSubmit,
}) => {
  return (
    <>
      <h1 className="text-4xl font-extrabold">
        Using this as a Composition Performing child to props on Functions
      </h1>
      <div className="form-handeling mx-20 flex gap-6 justify-center items-center flex-col">
        <form onSubmit={HandleSubmit}>
          <div>
            <label>Name : </label>
            <input
              type="text"
              placeholder="Enter Something"
              name="name"
              onChange={HandleFormChange}
              value={formData["name"] || ""}
              className="pl-2"
            />
          </div>
          <div>
            <label>email : </label>
            <input
              type="email"
              placeholder="Enter Something"
              name="email"
              onChange={HandleFormChange}
              value={formData["email"] || ""}
              className="pl-2"
            />
          </div>

          <button type="submit" className="mb-10 border bg-gray-200 py-3 px-5">
            Submit{" "}
          </button>
        </form>
      </div>
    </>
  );
};
export default Composition;
