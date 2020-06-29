export default `import React from "react";
import { useForm } from "react-hook-form";
type Inputs = {
  a: number;
  b: string;
  c: Date;
  d: {
    e: string;
  };
  f: {
    g: number[];
    h: string[];
    i: { j: string }[];
  };
  k: any;
  l: any[];
  m: unknown;
  n: unknown[];
  o: object;
  p: object[];
  q: {
    r: any;
    s: {
      t: any[];
      u: unknown;
      v: object;
    }[];
    w: Date[];
    x: {
      y: {
        z: object[];
      };
    };
  };
};
export default function App() {
  const { errors } = useForm<Inputs>();
  console.log(errors?.a?.message);
  console.log(errors?.b?.message);
  console.log(errors?.c?.message);
  console.log(errors?.d?.e?.message);
  console.log(errors?.f?.g && errors.f.g[0] && errors.f.g[0].message
  );
  console.log(errors?.f?.h && errors.f.h[0] && errors.f.h[0].message
  );
  console.log(
      errors?.f?.i &&
      errors?.f?.i[0] &&
      errors.f.i[0].j &&
      errors.f.i[0].j.message
  );
  console.log(errors?.k?.message);
  console.log(errors?.l?.message);
  console.log(errors?.m?.message);
  console.log(errors?.n && errors.n[0] && errors.n[0].message);
  console.log(errors?.o?.message);
  console.log(errors?.p && errors.p[0] && errors.p[0].message);
  console.log(errors?.q?.r?.message);
  console.log(
    errors?.q?.s && errors.q.s[0] && errors.q.s[0].t.message
  );
  console.log(
      errors?.q?.s &&
      errors.q.s[0] &&
      errors.q.s[0].u &&
      errors.q.s[0].u.message
  );
  console.log(
      errors?.q?.s &&
      errors.q.s[0] &&
      errors.q.s[0].v &&
      errors.q.s[0].v.message
  );
  console.log(errors?.q?.w && errors.q.w[0] && errors.q.w[0].message
  );
  console.log(
      errors?.q?.x?.y?.z &&
      errors.q.x.y.z[0] &&
      errors.q.x.y.z[0].message
  );
  return <form />;
}
`
