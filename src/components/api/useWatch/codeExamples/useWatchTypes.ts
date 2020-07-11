export default `const none = useWatch<{
  test: string;
  test1: number;
  test2: boolean;
}>({});
// const none: {
//   test?: string | undefined;
//   test1?: number | undefined;
//   test2?: boolean | undefined;
// }

const defaultValueOnly = useWatch<{
  test: string;
  test1: number;
  test2: boolean;
}>({ defaultValue: { test: 'test' } });
// const defaultValueOnly: {
//   test?: string | undefined;
//   test1?: number | undefined;
//   test2?: boolean | undefined;
// }

const nameOnly1 = useWatch<string>({ name: 'test' });
// const nameOnly1: string | undefined

const nameOnly2 = useWatch<number>({ name: 'test1' });
// const nameOnly2: number | undefined

const nameOnly3 = useWatch<boolean>({ name: 'test2' });
// const nameOnly3: boolean | undefined

const namesOnly1 = useWatch<{ test: string }>({ name: ['test'] });
// const namesOnly1: {
//   test?: string | undefined;
// }

const namesOnly2 = useWatch<{
  test: string;
  test1: number;
}>({ name: ['test', 'test1'] });
// const namesOnly2: {
//   test?: string | undefined;
//   test1?: number | undefined;
// }

const namesOnly3 = useWatch<{
  test: string;
  test1: number;
  test2: boolean;
}>({ name: ['test', 'test1', 'test2'] });
// const namesOnly3: {
//   test?: string | undefined;
//   test1?: number | undefined;
//   test2?: boolean | undefined;
// }

const controlOnly = useWatch<{
  test: string;
  test1: number;
  test2: boolean;
}>({ control });
// const controlOnly: {
//   test?: string | undefined;
//   test1?: number | undefined;
//   test2?: boolean | undefined;
// }

const defaultValueAndControl = useWatch<{
  test: string;
  test1: number;
  test2: boolean;
}>({
  defaultValue: { test: 'test' },
  control,
});
// const defaultValueAndControl: {
//   test?: string | undefined;
//   test1?: number | undefined;
//   test2?: boolean | undefined;
// }

const defaultValueAndName1 = useWatch<string>({
  name: 'test',
  defaultValue: 'test',
});
// const defaultValueAndName1: string

const defaultValueAndName2 = useWatch<number>({
  name: 'test1',
  defaultValue: 1,
});
// const defaultValueAndName2: number

const defaultValueAndName3 = useWatch<boolean>({
  name: 'test2',
  defaultValue: true,
});
// const defaultValueAndName3: boolean

const defaultValueAndNames1 = useWatch<{ test: string }>({
  defaultValue: { test: 'test' },
  name: ['test'],
});
// const defaultValueAndNames1: {
//   test?: string | undefined;
// }

const defaultValueAndNames2 = useWatch<{
  test: string;
  test1: number;
}>({
  defaultValue: { test: 'test', test1: 1 },
  name: ['test', 'test1'],
});
// const defaultValueAndNames2: {
//   test?: string | undefined;
//   test1?: number | undefined;
// }

const defaultValueAndNames3 = useWatch<{
  test: string;
  test1: number;
  test2: boolean;
}>({
  defaultValue: { test: 'test', test1: 1, test2: true },
  name: ['test', 'test1', 'test2'],
});
// const defaultValueAndNames3: {
//   test?: string | undefined;
//   test1?: number | undefined;
//   test2?: boolean | undefined;
// }

const nameAndControl = useWatch<number>({ name: 'test1', control });
// const nameAndControl: number | undefined

const namesAndControl = useWatch<{
  test: string;
  test1: number;
}>({ name: ['test', 'test1'], control });
// const namesAndControl: {
//   test?: string | undefined;
//   test1?: number | undefined;
// }

const defaultValueAndNameAndControl1 = useWatch<number>({
  defaultValue: 1,
  name: 'test1',
  control,
});
// const defaultValueAndNameAndControl1: number

const defaultValueAndNamesAndControl2 = useWatch<{
  test: string;
  test1: number;
  test2: boolean;
}>({
  name: ['test', 'test1', 'test2'],
  defaultValue: { test: 'test', test1: 1, test2: true },
  control,
});
// const defaultValueAndNamesAndControl2: {
//   test?: string | undefined;
//   test1?: number | undefined;
//   test2?: boolean | undefined;
// }

// type error
const error1 = useWatch<string>({ control, name: 'test', defaultValue: 1 }); // ❌
const output2 = useWatch<{
  test: string;
  test1: number;
  test2: boolean;
}>({
  control,
  name: ['test', 'test2'],
  defaultValue: { test: 1, test2: true },
}); // ❌

const output3 = useWatch<{
  test: string;
  test1: number;
  test2: boolean;
}>({
  control,
  name: ['test', 'test2'],
  defaultValue: { notExists: 'notExists', test2: true },
}); // ❌

// expect type error, but no type error because support nested object
const expectTypError = useWatch<{
  test: string;
  test1: number;
  test2: boolean;
}>({ control, name: ['test1', 'notExists'] }); // ✅
// const expectTypError: {
//   test?: string | undefined;
//   test1?: number | undefined;
//   test2?: boolean | undefined;
// }
`
