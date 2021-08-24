import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { apiGet } from '../misc/config';
const Show = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const renderShow = () => {
    show.map(items => (
      <div key={items.id}>
        Name:{items.name}
        Language:{items.language}
        Premiered on:{items.premiered}
      </div>
    ));
  };
  useEffect(() => {
    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`).then(results => {
      setShow(results);
    });
  }, [id]);

  console.log('show', show);

  return <div>{renderShow}</div>;
};

export default Show;
