import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "../utils/firebase-config";
import Card from "../components/Card";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { getUserLikedMovies } from "../store";
import { useDispatch, useSelector } from "react-redux";

export default function UserLiked() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  // const movies = useSelector((state) => state.flixxit.movies);
 const [movies, setMovies] = useState([]);

  const [email, setEmail] = useState(undefined);

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) setEmail(currentUser.email);
    else navigate("/login");
  });

  const dispatch = useDispatch();
  const fetchMovies = async (email) => {
    const moviesArray = await dispatch(getUserLikedMovies(email)).unwrap();
    console.log(moviesArray);
      setMovies(moviesArray);
  }

  useEffect(() => {
    if (email) {
      fetchMovies(email);
    }
  }, [email]);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <Container>
      <Navbar isScrolled={isScrolled} />
      <div className="content flex column">
        <h1>My List</h1>
        <div className="grid flex">
          {movies.map((movie, index) => {
            return (
              <Card
                movieData={movie}
                index={index}
                key={movie.id}
                isLiked={true}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .content {
    margin: 2.5rem;
    margin-top: 8rem;
    gap: 4rem;
    h1 {
      margin-left: 3rem;
    }
    .grid {
      flex-wrap: wrap;
      gap: 2rem;
    }
  }
`;
