export default formData => {
  return `
import React from 'react';
import useForm from 'react-hook-form';

export default function Form() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
${Array.isArray(formData) ? formData.reduce((previous, { type, name, required, max, min, maxLength, minLength, pattern, options }) => {
    const anyAttribute = [required, max, min, maxLength, minLength, pattern].some(Boolean);
    const ref = ` ref={register${anyAttribute ? '({ required: true })' : ''}}`;

    if (type === 'select') {
      const select = `      <select name="${name}"${ref}>\n${options.split(';').filter(Boolean).reduce((temp, option) => {
        return temp + `        <option value="${option}">${option}</option>\n`;
      }, '')}      </select>`;

      return previous + select;
    }

    if (type === 'radio') {
      const select = `\n${options.split(';').filter(Boolean).reduce((temp, option) => {
        return temp + `      <input name="${name}" type="${type}" value="${option}"${ref}/>\n`;
      }, '')}`;

      return previous + select;
    }
    
    let attributes = '';
    
    if (anyAttribute) {
      attributes += '({';
      
      if (required) {
        attributes += 'required: true'
      }
      if (max) {
        attributes += `${attributes === '({' ? '' : ', '}max: ${max}`;
      }
      if (min) {
        attributes += `${attributes === '({' ? '' : ', '}min: ${min}`;
      }
      if (minLength) {
        attributes += `${attributes === '({' ? '' : ', '}minLength: ${minLength}`;
      }
      if (maxLength) {
        attributes += `${attributes === '({' ? '' : ', '}maxLength: ${maxLength}`;        
      }
      if (pattern) {
        attributes += `${attributes === '({' ? '' : ', '}pattern: /${pattern}/i`;        
      }

      attributes += '})';
    }

    if (type === 'textarea') {
      const select = `      <textarea name="${name}" ref={register${attributes}} />`;
      return previous + select;
    }

    return (
      previous +
      `      <input type="${type}" placeholder="${name}" name="${name}" ref={register${attributes}} />\n`
    );
  }, '') : ''}
      <input type="submit" />
    </form>
  );
}`;
};
