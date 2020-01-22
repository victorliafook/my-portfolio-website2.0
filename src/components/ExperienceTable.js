import React from 'react';
import { Table } from 'react-bootstrap';

const ExperienceTable = ({ experienceList }) => (
  <Table striped hover size="sm">
    <thead>
      <tr>
        <th>Course</th>
        <th>Institution</th>
        <th>Year</th>
      </tr>
    </thead>
    <tbody>
      {experienceList.map((entry, key) => (
        <tr>
          <td>{entry.name}</td>
          <td>{entry.organisation}</td>
          <td>{entry.year}</td>
        </tr>
      ))}
    </tbody>
  </Table>
);

export default ExperienceTable;