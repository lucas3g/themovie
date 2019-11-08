import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import api from '../../services/api';

import Container from '../../components/Container';

import { Form, FilmList, PageActions } from './styles';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: {},
      resp: [],
      title: [],
      result: [],
      imag: null,
      page: 1,
      loading: true,
      error: null,
      moviesPerPage: [],
      paginatorVisible: false,
    };
  }

  handleInputChange = e => {
    this.setState({ search: e.target.value, error: null });
  };

  handleSubmit = async e => {
    e.preventDefault();

    this.setState({
      loading: true,
      error: false,
    });

    const { search, page } = this.state;

    const response = await api.get(
      `search/movie?api_key=e0dea5f46f4e27dae4b29f586db1e19e&language=pt-BR&query=${search}`,
      {
        params: {
          page,
        },
      }
    );

    const data = {
      find: response.data.results,
    };

    this.setState({
      ...this.state,
      result: [...data.find],
    });

    this.state.moviesPerPage = data.find;

    console.log(page);

    // console.log('TCL: Main -> moviesPerPage', moviesPerPage);

    if (response.data.results.length === 0) {
      toast.warn('Nenhum filme encontrado!');
      this.setState({
        paginatorVisible: false,
      });
    } else {
      this.setState({
        paginatorVisible: true,
      });
    }

    const pageNumber = page; // isso vai ser estado

    this.setState({
      resp: data.find,
      moviesPerPage: data.find.slice(
        pageNumber === 1 ? 1 : pageNumber + pageNumber,
        5
      ),
      loading: false,
    });
  };

  takeName = async () => {
    const { resp } = this.state;

    const titles = {
      title: resp.map(results => results.title),
    };

    this.setState({
      title: titles.title,
    });
  };

  loadIssues = async () => {
    const { search, page } = this.state;

    // const repoName = decodeURIComponent(match.params.repository);

    const response = await api.get(
      `search/movie?api_key=e0dea5f46f4e27dae4b29f586db1e19e&language=pt-BR&query=${search}`,
      {
        params: {
          page,
        },
      }
    );

    this.setState({ search: response.data.results });
  };

  handlePage = async action => {
    const { page, moviesPerPage } = this.state;
    await this.setState({
      page: action === 'back' ? page - 1 : page + 1,
    });

    const pageNumber = 4 + page; // isso vai ser estado

    moviesPerPage.splice(pageNumber === 1 ? 1 : pageNumber + pageNumber, 5);

    this.loadIssues();
  };

  render() {
    const { page, paginatorVisible, moviesPerPage } = this.state;

    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Busque um filme por nome, ano ou gênero..."
            onChange={this.handleInputChange}
          />
        </Form>
        <FilmList>
          {moviesPerPage.map(results => (
            <Link to={`/film/${encodeURIComponent(results.title)}`}>
              <button type="button">
                <li key={String(results.id)}>
                  <img
                    src={
                      results.poster_path === null
                        ? `data:image/jpeg;base64,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`
                        : `https://image.tmdb.org/t/p/original${results.poster_path}`
                    }
                    alt=""
                  />
                  <div>
                    <strong>
                      <h1>{results.title}</h1>
                    </strong>
                    <h3>{results.vote_average}</h3>
                    <h2>{results.release_date}</h2>
                    <p>{results.overview}</p>
                  </div>
                  {/* <Link to={`/film/${encodeURIComponent(results.title)}`}>
                  Mais...
                </Link> */}
                </li>
              </button>
            </Link>
          ))}
          {paginatorVisible === true ? (
            <PageActions>
              <button
                type="button"
                disabled={page < 2}
                onClick={() => this.handlePage('back')}
              >
                {page - 1}
              </button>
              <span>{page}</span>
              <button type="button" onClick={() => this.handlePage('next')}>
                {page + 1}
              </button>
            </PageActions>
          ) : (
            <PageActions />
          )}
        </FilmList>
      </Container>
    );
  }
}
