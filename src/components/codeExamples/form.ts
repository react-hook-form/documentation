export default `import React from "react";
import useForm from "react-hook-form";

export default function App({ defaultValues, children, onSubmit }) {
  const methods = useForm({ defaultValues });
  const { handleSubmit } = methods;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {Array.isArray(children)
        ? children.map(child => {
            return child.props.name
              ? React.createElement(child.type, {
                  ...{
                    ...child.props,
                    register: methods.register,
                    key: child.props.name
                  }
                })
              : child;
          })
        : children}
    </form>
  );
}
`
