import React from 'react';
import { Table } from 'react-bootstrap';

const ExperienceTable = ({ experienceList }) => (
  <Table striped hover size='sm'>
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
          <td>{getNameWithLink(entry)}</td>
          <td>{entry.organisation}</td>
          <td>{getDuration(entry)}</td>
        </tr>
      ))}
    </tbody>
  </Table>
);

const getNameWithLink = function(experienceEntry) {
  if (experienceEntry.url !== undefined) {
    return (
      <a className='text-info' 
        href={experienceEntry.url} 
        target='_blank' 
        rel="noopener noreferrer">
          {experienceEntry.name}
      </a>
    );
  }
  
  return experienceEntry.name;
}

const getDuration = function(experienceEntry) {
  let durationStr = experienceEntry.year;
  if (experienceEntry.yearTo !== undefined) {
    durationStr += ' - ';
    durationStr += experienceEntry.yearTo;
  }
  
  return durationStr;
}

export default ExperienceTable;