'use strict';

const tap = require('tap');

const mediasoup = require('../');

tap.test('server.updateSettings() with no options must succeed', { timeout: 1000 }, (t) =>
{
	let server = mediasoup.Server();

	t.tearDown(() => server.close());

	server.updateSettings()
		.then(()  => t.end())
		.catch(() => t.fail('should not fail'));
});

tap.test('server.updateSettings() with valid options must succeed', { timeout: 1000 }, (t) =>
{
	let server = mediasoup.Server();

	t.tearDown(() => server.close());

	server.updateSettings({ logLevel: 'warn' })
		.then(()  => t.end())
		.catch(() => t.fail('should not fail'));
});

tap.test('server.updateSettings() with invalid options must fail', { timeout: 1000 }, (t) =>
{
	let server = mediasoup.Server();

	t.tearDown(() => server.close());

	server.updateSettings({ logLevel: 'WRONG_LOG_LEVEL' })
		.then(()  => t.fail('should not fail'))
		.catch(() =>  t.end());
});
