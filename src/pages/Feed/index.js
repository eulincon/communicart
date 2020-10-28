import React from 'react';
import CardVaga from '../../components/CardVaga';
import SkeletonPage from '../../components/SkeletonPage';

const Feed = () => {
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

export default Feed;