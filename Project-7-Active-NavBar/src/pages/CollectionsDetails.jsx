import React from "react";
import { useParams } from "react-router-dom";

const CollectionsDetails = () => {
  const params = useParams();

  return (
    <div>
      <h1>{params.id} CollectionsDetails</h1>
    </div>
  );
};

export default CollectionsDetails;
