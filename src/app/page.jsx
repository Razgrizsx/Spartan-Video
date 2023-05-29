import React from "react";
import BillBoard from './components/BillBoard'
import MovieList from './components/MovieList'

export default async function Home() {

  return (
    <div className="bg-zinc-900 text-white">
      <BillBoard/>
      <MovieList/>
    </div>
  );
}
