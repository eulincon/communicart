import React from "react";

import CardVaga from "../../components/CardVaga";
import SkeletonPage from '../../components/SkeletonPage'

const PageDefault = ({ children }) => {
  return (
    <SkeletonPage sidebar={true} footer={false}>
        <CardVaga />
        <CardVaga />
        <CardVaga />
        <CardVaga />
        <CardVaga />
        <CardVaga />
        <CardVaga />
        <CardVaga />
        <CardVaga />
        <CardVaga />
        <CardVaga />
        <CardVaga />
        <CardVaga />
        <CardVaga />
    </SkeletonPage>
  );
};

export default PageDefault;
