import styled from 'styled-components';

export const Form = styled.form`
  margin-top: 10px;
  display: flex;
  width: 100%;
  justify-content: center;

  input {
    flex: 1;
    background: #eee;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 30px;
    font-size: 16px;

    transition: border 0.25s ease-out;
  }
`;

export const FilmList = styled.div`
  padding-top: 15px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;
  width: 100%;

  button {
    display: flex;
    width: 100%;
    border: 1px solid #eee;
    border-radius: 4px;

    & + button {
      margin-top: 10px;
    }

    li {
      display: flex;
      width: 100%;
      border: 1px solid #eee;
      border-radius: 4px;

      /* & + li {
        margin-top: 10px;
      } */

      img {
        width: 200px;
        height: 275px !important;
      }

      div {
        flex: 1;
        flex-direction: column;

        h1 {
          background: #116193;
          width: 100%;
          padding: 10px 95px;
          color: #fff;
        }

        h3 {
          margin-top: -30px;
          margin-left: 15px;
          width: 60px;
          height: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 20px;

          background: #116193;
          border-radius: 50%;
          border: 5px solid #00e8e4;
          box-shadow: 0px 0px 0px 3px #116193;
          padding-left: 1px;
          color: #00e8e4;
        }

        h2 {
          margin-top: -25px;
          margin-left: 95px;
          font-size: 17px;
          font-weight: lighter;
          color: #999;
        }

        p {
          margin: 25px 15px;
          color: #777;
          font-weight: normal;
        }
      }
      a {
        align-self: baseline;
        margin: 0 15px;
      }
    }
  }
`;

export const PageActions = styled.div`
  padding-top: 15px;
  display: flex;
  justify-content: center; /**space-between */
  align-items: center;
  font-size: 12px;

  span {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 45px;
    background: #116193;
    border-radius: 50%;
    border: 5px solid #00e8e4;
    box-shadow: 0px 0px 0px 3px #116193;
    margin: 0 13px;
    padding-left: 1px;
    color: #00e8e4;
    font-size: 20px;
  }

  button {
    transition: opacity 0.25s ease-out;
    border-radius: 50%;
    width: 37px;
    outline: 0;
    border: 10;
    padding: 8px;
    color: #116193;
    background: #fff;
    border-color: #fff;
    border-style: solid;
    font-weight: bold;
    font-size: 15px;

    &:disabled {
      opacity: 0.35;
      cursor: not-allowed;
    }
  }
`;
