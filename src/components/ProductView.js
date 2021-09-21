import React from "react";
import { connect } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../App.css";

import {
  Card,
  ListGroup,
  ListGroupItem,
  Container,
  Row,
  Col,
  Image,
} from "react-bootstrap";

import Picker from "./Picker";
import { selectProduct } from "../actions";

class ProductView extends React.Component {
  renderCart() {
    return this.setState({ cart: this.props.selectedProduct });
  }
  renderProducts() {
    return this.props.products.products.map((product) => {
      return (
        <div key={product._id}>
          <div onClick={() => this.props.selectProduct(product)}>
            <Image src={product.image[0]} />
            <p>{product.name}</p>
            <h5> ${product.price}</h5>
          </div>
        </div>
      );
    });
  }

  render() {
    const { selectedProduct } = this.props;
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };

    return (
      <div>
        <Container fluid className="mt-5">
          <Row>
            <Col className="col-sm" lg={2}>
              <Card>
                <ListGroup variant="flush">
                  {selectedProduct.image.map((image) => {
                    return (
                      <div key={image}>
                        <ListGroupItem>
                          <Image src={image} thumbnail />
                        </ListGroupItem>
                      </div>
                    );
                  })}
                </ListGroup>
              </Card>
            </Col>

            <Col className="col-sm" lg={6}>
              <Image style={{ width: "100%" }} src={selectedProduct.image[0]} />
            </Col>

            <Col className="col-sm product-desc" lg={4}>
              <h4>{selectedProduct.name}</h4>
              <p></p>
              <h6>{selectedProduct.discount}</h6>
              <p>
                {selectedProduct.shipping > 125 && (
                  <span>FREE GROUND SHIPPING on all orders over 125</span>
                )}
              </p>
              <h3>${selectedProduct.price}</h3>

              <Picker selectedItem={selectedProduct} />
            </Col>
          </Row>
        </Container>

        <Container fluid className="mt-5">
          <Row>
            <div className="col-sm">
              <Carousel
                responsive={responsive}
                swipeable={true}
                autoPlay={true}
                infinite={true}
              >
                {this.renderProducts()}
              </Carousel>
              ;
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const products = state.products;
  const selectedProduct = state.selectedProduct;

  return { products, selectedProduct };
};
export default connect(mapStateToProps, { selectProduct })(ProductView);
