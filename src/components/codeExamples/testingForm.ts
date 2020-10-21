export const step1 = `module.exports = {
  setupFilesAfterEnv: ["<rootDir>/setup.js"] // or .ts for TypeScript App
  // ...other settings
};`

export const step2 = `import React from "react";
import { useForm } from "react-hook-form";

export default function App({ login }) {
  const { register, handleSubmit, errors, reset } = useForm();
  const onSubmit = async data => {
    await login(data.email, data.password);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">email</label>
      <input
        id="email"
        name="email"
        ref={register({
          required: "required",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Entered value does not match email format"
          }
        })}
        type="email"
      />
      {errors.email && <span role="alert">{errors.email.message}</span>}
      <label htmlFor="password">password</label>
      <input
        id="password"
        name="password"
        ref={register({
          required: "required",
          minLength: {
            value: 5,
            message: "min length is 5"
          }
        })}
        type="password"
      />
      {errors.password && <span role="alert">{errors.password.message}</span>}
      <button type="submit">SUBMIT</button>
    </form>
  );
}`

export const step3 = `import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";

const mockLogin = jest.fn((email, password) => {
  return Promise.resolve({ email, password });
});

describe("App", () => {
  beforeEach(() => {
    render(<App login={mockLogin} />);
  });
  
  it("should display required error when value is invalid", async () => {
    fireEvent.submit(screen.getByRole("button"));

    expect(await screen.findAllByRole("alert")).toHaveLength(2);
    expect(mockLogin).not.toBeCalled();
  });

  it("should display matching error when email is invalid", async () => {
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: {
        value: "test"
      }
    });

    fireEvent.input(screen.getByLabelText("password"), {
      target: {
        value: "password"
      }
    });

    fireEvent.submit(screen.getByRole("button"));

    expect(await screen.findAllByRole("alert")).toHaveLength(1);
    expect(mockLogin).not.toBeCalled();
    expect(screen.getByRole("textbox", { name: /email/i }).value).toBe("test");
    expect(screen.getByLabelText("password").value).toBe("password");
  });

  it("should display min length error when password is invalid", async () => {
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: {
        value: "test@mail.com"
      }
    });

    fireEvent.input(screen.getByLabelText("password"), {
      target: {
        value: "pass"
      }
    });

    fireEvent.submit(screen.getByRole("button"));

    expect(await screen.findAllByRole("alert")).toHaveLength(1);
    expect(mockLogin).not.toBeCalled();
    expect(screen.getByRole("textbox", { name: /email/i }).value).toBe(
      "test@mail.com"
    );
    expect(screen.getByLabelText("password").value).toBe("pass");
  });

  it("should not display error when value is valid", async () => {
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: {
        value: "test@mail.com"
      }
    });

    fireEvent.input(screen.getByLabelText("password"), {
      target: {
        value: "password"
      }
    });

    fireEvent.submit(screen.getByRole("button"));

    await waitFor(() => expect(screen.queryAllByRole("alert")).toHaveLength(0));
    expect(mockLogin).toBeCalledWith("test@mail.com", "password");
    expect(screen.getByRole("textbox", { name: /email/i }).value).toBe("");
    expect(screen.getByLabelText("password").value).toBe("");
  });
});
`
