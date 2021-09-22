import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | sale app', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function (assert) {
    await visit('/');

    assert.equal(currentURL(), '/');

    //assert.dom('[data-test-selector="app-title"]').hasText('Welcome SalesApp!');
    assert.dom('[data-test="app-title"]').hasText('Welcome SalesApp!');
    assert.dom('[data-test="products-button"]').hasText('Catalog');
    await click('[data-test="products-button"]');

    assert.equal(currentURL(), '/products');
  });

  test('visiting /products', async function (assert) {
    await visit('/products');
    assert.equal(currentURL(), '/products');

    assert
      .dom('[data-test="page-title"]')
      .hasText(`SaleAll - Here you'll find your PRODUCTS LIST`);

    assert.dom('[data-test="home-button"]').hasText('Home');
    await click('[data-test="home-button"]');
    assert.equal(currentURL(), '/');

    // assert.dom('[data-test="cart-button"]').hasText('View Cart');
    // await click('[data-test="cart-button"]');
    // assert.equal(currentURL(), '/cart');
  });

  test('visiting /cart', async function (assert) {
    await visit('/cart');

    assert.equal(currentURL(), '/cart');
    assert
      .dom('[data-test="page-title"]')
      .hasText(`SaleAll - Here you'll find your CART`);

    assert.dom('[data-test="checkout-button"]').hasText('Checkout');
    await click('[data-test="checkout-button"]');
    assert.equal(currentURL(), '/checkout');
  });

  test('visiting /checkout', async function (assert) {
    await visit('/checkout');

    assert.equal(currentURL(), '/checkout');
    assert
      .dom('[data-test="page-title"]')
      .hasText(`SaleAll - Here you'll find your CHECKOUT PROCESS`);

    assert.dom('[data-test="products-button"]').hasText('Continue Shopping');
    await click('[data-test="products-button"]');
    assert.equal(currentURL(), '/products');
  });

  test('visiting /contactme', async function (assert) {
    await visit('/contactme');
    assert.equal(currentURL(), '/contactme');

    assert.dom('[data-test="page-title"]').hasText('Contact Us');

    assert.dom('[data-test="telf-link"]').hasText('+54 (911) 6845-3047');
    assert.dom('[data-test="mail-link"]').hasText('karinduboy@gmail.com');
  });
});
