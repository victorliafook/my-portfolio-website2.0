import React from 'react';
import { Table } from 'react-bootstrap';

const ExperienceTable = ({ experienceList }) => (
  <Table striped hover size="sm">
    <thead>
      <tr>
        <th>Name</th>
        <th>Institution</th>
        <th>Year</th>
      </tr>
    </thead>
    <tbody>
      {experienceList.map((entry, key) => (
        <tr key={key}>
          <td>{entry.name}</td>
          <td>{entry.organisation}</td>
          <td>{getDuration(entry)}</td>
        </tr>
      ))}
    </tbody>
  </Table>
);

const getDuration = function(experienceEntry) {
  let durationStr = experienceEntry.year;
  if (experienceEntry.yearTo !== undefined) {
    durationStr += ' - ';
    durationStr += experienceEntry.yearTo;
  }
  
  return durationStr;
}

export default ExperienceTable;