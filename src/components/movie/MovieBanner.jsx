import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { COLORS } from '../../colors';
import { Card } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import RatingCircle from './RatingCircle';

class MovieBanner extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			height: '0',
			width: '0'
		};
	}

	componentDidMount() {
		this.setState({
			height: '240',
			width: '240'
		});
	}

	render() {
		const movieDetails = this.props.movieDetails;
		// console.log(movieDetails.Title)
		return (
			<Container>
				{movieDetails ? (
					<Row className="pb-5 pt-3 justify-content-between">
						<Col xl={8}>
							<Row className="mt-3 align-items-center">
								<Col xl={8}>
									<p style={{ fontSize: '4em', fontWeight: 'bolder' }}>{movieDetails.Title}</p>
								</Col>
								<Col xl={4}>
									<Row
										style={{
											border: `2px solid ${COLORS.secondary}`,
											borderRadius: 10,
											backgroundColor: 'white'
										}}
										className="justify-content-center mx-5 py-1 font-weight-bolder"
									>
										<span style={{ fontSize: 24 }}>{movieDetails.Year}</span>
									</Row>
								</Col>
							</Row>
							<Row className="mt-n3">
								<Col xl={2}>{movieDetails.Rated}</Col>
								<Col xl={2}>{movieDetails.Runtime}</Col>
								<Col xl={3}>{movieDetails.Released}</Col>
							</Row>
							<Row className="mt-4">
								<Col xl={10}>
									<span style={{ fontSize: 20 }}>{movieDetails.Plot}</span>
								</Col>
							</Row>
							<Row className="mt-5 mb-1">
								<Col>
									<h6 className="font-weight-bold">GENRE</h6>
								</Col>
								<Col>
									<h6 className="font-weight-bold">DIRECTOR</h6>
								</Col>
							</Row>
							<Row>
								<Col>
									<h6>{movieDetails.Genre}</h6>
								</Col>
								<Col>
									<h6>{movieDetails.Director}</h6>
								</Col>
							</Row>
							<Row className="mt-5 mb-1">
								<Col>
									<h6 className="font-weight-bold">WRITERS</h6>
								</Col>
								<Col>
									<h6 className="font-weight-bold">STARS</h6>
								</Col>
							</Row>
							<Row>
								<Col>
									<h6>{movieDetails.Writer}</h6>
								</Col>
								<Col>
									<h6>{movieDetails.Actors}</h6>
								</Col>
							</Row>
						</Col>
						<Col className="" xl={4}>
							<Row className="justify-content-center h-100 py-4">
								<Card className="w-75" style={{ backgroundColor: COLORS.white }}>
									<CardContent>
										<Row className="justify-content-center">
											<RatingCircle
												radius="90"
												rating={movieDetails.imdbRating}
												height={this.state.height}
												width={this.state.width}
												strokeColor={COLORS.primary}
												strokeWidth="15"
												showText="true"
												textColor="#222"
												textSize="68"
											/>
										</Row>
										<Row className="justify-content-center">
											<h5>{movieDetails.imdbVotes} Ratings</h5>
										</Row>
									</CardContent>
								</Card>
							</Row>
						</Col>
					</Row>
				) : (
					<Row>
						<h2>Loading...</h2>
					</Row>
				)}
			</Container>
		);
	}
}

export default MovieBanner;
