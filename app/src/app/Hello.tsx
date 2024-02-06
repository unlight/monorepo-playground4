import React, { useEffect, useState } from 'react';

export function Hello() {
  const [greets, setGreets] = useState('');

  useEffect(() => {
    fetch('/graphql', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        query: /* GraphQL */ `
          query ExampleQuery {
            hello
          }
        `,
      }),
    })
      .then(response => response.json())
      .then(json => {
        setGreets(json);
      })
      .catch(err => {
        console.log('err', err);
      });
  }, []);

  return [
    <p>GraphQL response</p>,
    <pre>{JSON.stringify(greets, null, 2)}</pre>,
  ];
}
