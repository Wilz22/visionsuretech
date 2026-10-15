import { test } from 'node:test';
import assert from 'node:assert/strict';
import { company } from '../src/data/company.ts';
import { buildLocation } from '../src/lib/location.ts';
import { buildOrganizationSchema } from '../src/lib/organization-schema.ts';
import { about } from '../src/i18n/locales/en-about.ts';

test('company location and schema use supplied address without inventing hours or VisionSure founding date', () => {
  const location = buildLocation(company.contact.address);
  assert.ok(location.label.includes('Unit 10, 19695'));
  assert.ok(location.label.includes('V1M 3E1'));
  assert.equal(
    new URL(location.directions).searchParams.get('query'),
    location.label + ', Canada',
  );
  assert.equal(buildLocation(null), null);
  const schema = buildOrganizationSchema(company);
  assert.equal(schema.address.addressLocality, 'Langley');
  assert.equal(schema.address.postalCode, 'V1M 3E1');
  assert.equal(schema.founder.length, 2);
  assert.ok(
    schema.founder.every((person) => person.worksFor['@id'] === schema['@id']),
  );
  assert.equal(schema.foundingDate, undefined);
  assert.equal(schema.openingHours, undefined);
  assert.equal(company.contact.hours, null);
});
test('founder biographies preserve supplied history and attribute experience and recognition to each person', () => {
  assert.equal(about.founders.jacob.paragraphs.length, 4);
  assert.equal(about.founders.maria.paragraphs.length, 5);
  assert.ok(
    about.founders.jacob.paragraphs.some((p) =>
      p.includes('In 2014, he founded Quality Crane and Electronics Repair'),
    ),
  );
  assert.ok(
    about.founders.maria.paragraphs.some(
      (p) => p.includes('WCC') && p.includes('5-star Google reviews'),
    ),
  );
  assert.ok(about.location.text.includes('Lower Mainland and Fraser Valley'));
});
