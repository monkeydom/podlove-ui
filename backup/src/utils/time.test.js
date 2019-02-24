import test from 'ava'
import {
  toHumanTime,
  toPlayerTime,
  secondsToMilliseconds,
  millisecondsToSeconds
} from './time'

test('exports a method called toHumanTime', t => {
  t.truthy(typeof toHumanTime === 'function')
})

test('exports a method called toPlayerTime', t => {
  t.truthy(typeof toPlayerTime === 'function')
})

test('toHumanTime tolerates invalid inputs', t => {
  t.is(toHumanTime(), '00:00')
  t.is(toHumanTime(undefined), '00:00')
  t.is(toHumanTime(null), '00:00')
  t.is(toHumanTime('foooo'), '00:00')
})

test('toHumanTime transforms given milliseconds to a time string', t => {
  t.is(toHumanTime(60000), '01:00')
  t.is(toHumanTime(3600000), '1:00:00')
})

test('toPlayerTime tolerates invalid inputs', t => {
  t.is(toPlayerTime(), 0)
  t.is(toPlayerTime(undefined), 0)
  t.is(toPlayerTime(null), 0)
  t.is(toPlayerTime('foo:oo'), 0)
})

// Time Parsers
test(`toPlayerTime: parses hours from hh:mm:ss.f`, t => {
  t.is(toPlayerTime('04:8:06.5'), 14886005)
  t.is(toPlayerTime('4:8:06.5'), 14886005)
})

test(`toPlayerTime: parses minutes from mm:ss.fff`, t => {
  t.is(toPlayerTime('8:06.500'), 486500)
  t.is(toPlayerTime('8:06.500'), 486500)
})

test(`toPlayerTime: parses seconds from ss.fff`, t => {
  t.is(toPlayerTime('06.500'), 6500)
  t.is(toPlayerTime('6.500'), 6500)
  t.is(toPlayerTime('6'), 6000)
})

// Time Conversion
test(`exports a method called secondsToMilliseconds`, t => {
  t.is(typeof secondsToMilliseconds, 'function')
})

test(`exports a method called millisecondsToSeconds`, t => {
  t.is(typeof millisecondsToSeconds, 'function')
})

test(`secondsToMilliseconds: transforms seconds to milliseconds`, t => {
  t.is(secondsToMilliseconds(1.2), 1200)
})

test(`millisecondsToSeconds: transforms milliseconds to seconds`, t => {
  t.is(millisecondsToSeconds(1200), 1.2)
})