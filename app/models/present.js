import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  name: validator('presence', true),
  email: validator('format', {
    type: 'email'
  }),
  date: validator('presence', true),
  title: validator('presence', true)
});

export default DS.Model.extend(Validations, {
    name: DS.attr('string', { defaultValue: null }),
    email: DS.attr('string', { defaultValue: null }),
    date: DS.attr('string'),
    title: DS.attr('string'),
    comment: DS.attr('string')
});
