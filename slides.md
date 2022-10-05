---
theme: default
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
title: PostgreSQL as seen by Rubyists
info: |
  ## PostgreSQL as seen by Rubyists
css: unocss
fonts:
  provider: 'none'
  fallback: false
  local: 'Martian Grotesk, Martian Mono'
  sans: 'Martian Grotesk'
  serif: 'Martian Grotesk'
  mono: 'Martian Mono'
---

# <span class="postgresql">PostgreSQL</span><br>as seen by<br><span class="rubyists">Rubyists</span>

<div class="absolute bottom-0 my-2">
Andrey Novikov, Evil Martians<br />
<small><a href="https://kaigionrails.org/2022/">Kaigi on Rails 2022</a></small><br />
<small><time datetime="2022-10-22">22 October 2022</time></small>
</div>

<div class="absolute bottom-0 right-0 h-40 scaled-image flex items-end">
  <a href="https://evilmartians.com/" class="w-40 p-3"><img alt="Evil Martians" src="/images/01_Evil-Martians_Logo_v2.1_RGB.svg" class="block dark:hidden" /><img alt="Evil Martians" src="/images/02_Evil-Martians_Logo_v2.1_RGB_for-Dark-BG.svg" class="hidden dark:block" /></a>
  <a href="https://kaigionrails.org/" class="w-40 p-4"><img alt="Kaigi on Rails" src="/images/kaigi-on-rails-2022-light.svg" class="block dark:hidden" /><img alt="Kaigi on Rails" src="/images/kaigi-on-rails-2022-dark.svg" class="hidden dark:block" /></a>
</div>

<style>
  a {
    border-bottom: none !important;
  }
  h1 {
    font-stretch: 105%;
  }
  .postgresql {
    font-stretch: 75%;
    font-weight: 900;
    color: #336791;
    text-shadow: navy 1px 1px;
  }
  .rubyists {
    font-stretch: 135%;
    font-weight: bold;
    color: #CC342D;
    text-shadow: maroon 1px 1px;
  }
</style>

---
layout: none
---
<img alt="My GitHub" src="/images/github-envek-light.png" class="block dark:hidden" />
<img alt="Evil Martians" src="/images/github-envek-dark.png" class="hidden dark:block" />

<!-- 
こんにちは!　アンドレイと申します。
-->

---

<a href="https://evilmartians.com/?utm_source=kaigionrails&utm_medium=slides&utm_campaign=postgresql-as-seen-by-rubyists">
<img alt="Evil Martians" src="/images/01_Evil-Martians_Logo_v2.1_RGB.svg" class="block dark:hidden object-contain text-center m-auto max-h-112" />
<img alt="Evil Martians" src="/images/02_Evil-Martians_Logo_v2.1_RGB_for-Dark-BG.svg" class="hidden dark:block object-contain text-center m-auto max-h-112" />
</a>

<!--
俺は火星人です。ということ、「イービル・マーシャンズ」という会社に勤めています。
-->

---

# Martian Open Source

<div class="grid grid-cols-4 grid-rows-2 gap-4">
  <a href="https://github.com/yabeda-rb/yabeda">
    <figure>
      <img alt="Yabeda" src="/images/martian-oss/yabeda.svg" class="scaled-image h-40 mx-auto" />
      <figcaption>Yabeda: Ruby application instrumentation framework</figcaption>
    </figure>
  </a>
  <a href="https://github.com/evilmartians/lefthook">
    <figure>
      <img alt="LeftHook" src="/images/martian-oss/lefthook.svg" class="scaled-image h-40 mx-auto" />
      <figcaption>Lefthook: git hooks manager</figcaption>
    </figure>
  </a>
  <a href="https://anycable.io/">
    <figure>
      <img alt="AnyCable" src="/images/martian-oss/anycable.svg" class="scaled-image h-40 mx-auto" />
      <figcaption>AnyCable: Polyglot replacement for ActionCable server</figcaption>
    </figure>
  </a>
  <a href="https://postcss.org/">
    <figure>
      <img alt="PostCSS" src="/images/martian-oss/postcss.svg" class="scaled-image h-40 mx-auto" />
      <figcaption>PostCSS: A tool for transforming CSS with JavaScript</figcaption>
    </figure>
  </a>
  <a href="https://imgproxy.net/">
    <figure>
      <img alt="Imgproxy" src="/images/martian-oss/imgproxy-light.svg" class="scaled-image h-40 mx-auto block dark:hidden" />
      <img alt="Imgproxy" src="/images/martian-oss/imgproxy-dark.svg" class="scaled-image h-40 mx-auto hidden dark:block" />
      <figcaption>Imgproxy: Fast and secure standalone server for resizing and converting remote images</figcaption>
    </figure>
  </a>
  <a href="https://logux.io/">
    <figure>
      <img alt="Logux" src="/images/martian-oss/logux-logo-light.svg" class="scaled-image h-40 mx-auto block dark:hidden" />
      <img alt="Logux" src="/images/martian-oss/logux-logo-dark.svg" class="scaled-image h-40 mx-auto hidden dark:block" />
      <figcaption>Logux: Client-server communication framework based on Optimistic UI, CRDT, and log</figcaption>
    </figure>
  </a>
  <a href="https://github.com/DarthSim/overmind">
    <figure>
      <img alt="Overmind" src="/images/martian-oss/overmind.svg" class="scaled-image h-40 mx-auto" />
      <figcaption>Overmind: Process manager for Procfile-based applications and tmux </figcaption>
    </figure>
  </a>
  <a href="https://evilmartians.com/oss">
    <figure>
      <div class="h-40 text-2xl flex items-center justify-center">
        <qr-code-vue value="https://evilmartians.com/oss" class="scaled-image w-full h-full mx-auto p-4" render-as="svg" margin="1" />
      </div>
      <figcaption style="font-size: 1rem; margin-top: 0; line-height: 1.25rem;">Even more at evilmartians.com/oss</figcaption>
    </figure>
  </a>
</div>

<style>
  a { border-bottom: none !important; }
  figcaption {
    margin-top: 0.5rem;
    font-size: 0.6rem;
    line-height: 1rem;
    text-align: center;
  }
</style>

<!--
-->

---
layout: center
---

This talk is about…

# Subtle differences

<!--
今日、微妙の違いについて話をしたいと思います。ですが、微妙の違いっては何のことでしょう?
-->

---
layout: image
image: /images/roads-in-different-countries.jpg
---

---
layout: footnote
footnote-class: text-sm
---

<div class="grid grid-cols-[1fr_10rem_1fr] grid-rows-[min-content_auto] place-items-center h-full">

<h2 class="col-span-3">
Example of subtle yet important difference
</h2>

![Russian “Yield” sign](/images/road-signs/RU_road_sign_2.4.svg)

<div class="text-center">

Are they same?

<strong class="text-2xl text-center">…</strong>
</div>

![Japanese “Stop” sign](/images/road-signs/Japan_road_sign_330-B.svg)

</div>

::footnote::

Left: road sign conforming [Vienna Convention on Road Signs and Signals](https://en.wikipedia.org/wiki/Vienna_Convention_on_Road_Signs_and_Signals)

Right: Japanese road sign per “Order on Road Sign, Road Line, and Road Surface Marking”


---
layout: footnote
---

<div class="grid grid-cols-[1fr_10rem_1fr] grid-rows-[min-content_auto] place-items-center h-full">

<h2 class="col-span-3">
Example of subtle yet important difference
</h2>

![Russian “Yield” sign](/images/road-signs/RU_road_sign_2.4.svg)

<div class="text-center">

Are they same?

<strong class="text-3xl text-center">NO!</strong>
</div>

![Japanese “Stop” sign](/images/road-signs/Japan_road_sign_330-B.svg)

</div>

::footnote::

Both require drivers to give a way…

European sign doesn't have a requirement to stop or even slow down!

---
layout: footnote
---

<div class="grid grid-cols-[1fr_10rem_1fr] grid-rows-[min-content_auto] place-items-center h-full">

<h2 class="col-span-3">
Example of subtle yet important difference
</h2>

<div class="p-4 pt-8 pr-8">

![Russian “Yield” sign](/images/road-signs/RU_road_sign_2.5.svg)
</div>

<div class="text-center">

Are they same?

<strong class="text-3xl text-center">YES!</strong>
</div>

![Japanese “Stop” sign](/images/road-signs/Japan_road_sign_330-A.svg)

</div>

::footnote::

Stop signs around the world are _mostly_ octagonal.

Japanese signs have “STOP” word in English after 2017, but are still pretty rare to find.

---
layout: footnote
---

<div class="grid grid-cols-[1fr_10rem_1fr] grid-rows-[min-content_auto] place-items-center h-full">

<h2 class="col-span-3">
Example of subtle yet important difference
</h2>

![Russian “Yield” sign](/images/road-signs/RU_road_sign_2.4.svg)

<div class="text-center">

Maybe these are the same?

<strong class="text-3xl text-center">NO!</strong>
</div>

![Japanese “Stop” sign](/images/road-signs/Japan_road_sign_329-A.svg)

</div>

::footnote::

European sign doesn't have a requirement to slow down.

And Japanese sign doesn't have a requirement to give a way…

---

<div class="grid grid-cols-[1fr_10rem_1fr] grid-rows-[min-content_auto] place-items-center h-full">

<h2 class="col-span-3">
And how it relates to Ruby and PostgreSQL?
</h2>

<img alt="Ruby logo" src="/images/Ruby_logo.svg" class="w-full h-full scaled-image p-4" />

<twemoji-thinking-face class="self-end w-full h-32" />

<img alt="PostgreSQL logo" src="/images/Postgresql_elephant.svg" />

</div>

---

<div class="grid grid-cols-[1fr_10rem_1fr] grid-rows-[min-content_auto] place-items-center h-full">

<h2 class="col-span-3">
And how it relates to Ruby and PostgreSQL?
</h2>

<img alt="Ruby logo" src="/images/Ruby_logo.svg" class="w-full h-full scaled-image p-4" />

<p class="text-center">
Application data
<twemoji-repeat-button class="w-full h-32" />
Data in the database
</p>

<img alt="PostgreSQL logo" src="/images/Postgresql_elephant.svg" />

</div>

---
layout: center
---

# Ruby vs PostgreSQL data types

Are they same?

---
layout: comparison
---

## Integers

::rubytype::

`Integer`

Variable length

::ruby::

```ruby
1.size             # =>  8 (bytes)
(256**8 - 1).size  # =>  8 (bytes)
(256**8).size      # =>  9 (bytes)
(256**40 - 1).size # => 40 (bytes)
```

In ActiveModel there is validation for databases:

```ruby
Test.create(value: 2147483648)
# ActiveModel::RangeError: 2147483648 is out of range
# for ActiveModel::Type::Integer with limit 4 bytes
```

::pgtype::

`integer`

2, 4, 8 bytes signed

::postgresql::

<div class="text-xs">

| Name     | Size | Range |
|----------| - | - |
| `smallint` | 2 | -32768 to +32767 |
| `integer`  | 4 | -2147483648 to +2147483647 |
| `bigint`   | 8 | -9223372036854775808 to +9223372036854775807 |

</div>

```sql
INSERT INTO "tests" ("value") VALUES (2147483648);
-- ERROR:  integer out of range
```

<!-- -->

::footnote_ruby::

See [bignum.c](https://github.com/ruby/ruby/blob/ruby_3_1/bignum.c) in Ruby sources.

::footnote_pg::

See [Numeric types docs](https://www.postgresql.org/docs/14/datatype-numeric.html)


<!--

-->

---
layout: none
---
<a href="https://github.com/rails/rails/pull/26266">
<img alt="Ruby on Rails pull request № 26266" src="/images/rails-pull-request-26266-light.png" class="block dark:hidden" />
<img alt="Evil Martians" src="/images/rails-pull-request-26266-dark.png" class="hidden dark:block" />
</a>
<twemoji-backhand-index-pointing-left class="absolute left-550px bottom-66px text-5xl animate-pulse" />

---

## Oh no, I have integer primary keys! What to do?

 0. Don't panic!

 1. Use [pghero](https://github.com/ankane/pghero) or Heroku [pg:diagnose](https://devcenter.heroku.com/articles/heroku-postgres-performance-analytics#pg-diagnose) to detect problematic primary keys.

 2. Migrate to `bigint` if needed (use triggers, Luke)

 3. In case of emergency, remember that all integers are signed!
 
    <small>You always have 2 more billions of values on the ~~dark~~ negative side!</small>

    ```sql
    SELECT setval('<sequence_name>', -2147483647);
    ```

<qr-code url="https://github.com/ankane/pghero" caption="pghero" class="w-32 absolute bottom-10px right-10px" />

---
layout: comparison
---

## Floating point numbers

<p class="text-3xl absolute top-20px left-400px rotate-340 animate-pulse text-red-500 p-2 border-3 border-red-500">IEEE 754</p>

::rubytype::

`Float`

8 bytes (double-precision)

::ruby::

```ruby
0.1 + 0.2  # => 0.30000000000000004


Float::MAX # => 1.7976931348623157e+308
Float::MAX + '1e+308'.to_f # => Infinity
# BUT!
Float::MAX + '0.1'.to_f # => 1.7976931348623157e+308 🤔
Float::MAX == (Float::MAX + '0.1'.to_f) # => true 🤯


Float::NAN == Float::NAN # => false
```


::pgtype::

`real` — 4 bytes

`double` — 8 bytes

::postgresql::

```sql
SELECT 0.1::float + 0.2::float; -- 0.30000000000000004
SELECT 0.1 + 0.2; -- 0.3 (but it is NOT float!)

SELECT '1.7976931348623157e+308'::float + '1e+308'::float;
--- ERROR:  value out of range: overflow

SELECT '1.7976931348623157e+308'::float = 
('1.7976931348623157e+308'::float + '0.1'::float);
-- true ¯\_(ツ)_/¯

SELECT 'NaN'::float = 'NaN'::float; -- true 🤯
```

::footnote_ruby::

See Ruby docs for [Float](https://ruby-doc.org/core-3.1.0/Float.html)

::footnote_pg::

More fun at [0.30000000000000004.com](https://0.30000000000000004.com/)!

<qr-code url="https://0.30000000000000004.com/" caption="0.30000000000000004.com" class="w-32 absolute bottom-10px right-10px" />

---
layout: center
class: text-3xl text-center
---

Don't use floats for calculating money!

<div class="text-5xl my-12">
🤑💥🤕
</div>

Never ever!

<!--

じゃぁ、お金を数えるにはどんなデータ型を使った方がいいか…
-->

---
layout: comparison
---

## Arbitrary precision numbers

::rubytype::

`BigDecimal`

Variable length

::ruby::

```ruby
BigDecimal("0.1") + BigDecimal("0.2")  # => 0.3e0

BigDecimal("NaN") == BigDecimal("NaN") # => false
BigDecimal("1.0") / BigDecimal("0.0")  #=> Infinity

# To match PostgreSQL behavior:
BigDecimal.mode(BigDecimal::EXCEPTION_OVERFLOW, true)
BigDecimal("1.0") / BigDecimal("0.0")
# Computation results in 'Infinity' (FloatDomainError)

BigDecimal("0.1") + 0.2.to_d == 0.30000000000000004
# true 🤔
```

::pgtype::

`numeric`

Variable length

::postgresql::

```sql
SELECT 0.1 + 0.2; -- 0.3 which is decimal

SELECT 'NaN'::decimal = 'NaN'::decimal; -- true
SELECT '1.0'::decimal / '0.0'::decimal;
-- ERROR:  division by zero





SELECT (0.1 + 0.2) = (0.1::float + 0.2::float);
-- false
```

::footnote_ruby::

See Ruby docs for [BigDecimal](https://ruby-doc.org/stdlib-3.1.0/libdoc/bigdecimal/rdoc/BigDecimal.html)

::footnote_pg::

**Use `numeric` to store money!**

---
layout: comparison
---

## But there is money type, isn't it?

::rubytype::

`BigDecimal`

Variable size

::ruby::

```ruby
# If the database locale setting isn't `en_US`:

# Creation may fail:
Product.create!(price: 100500.42)
# ERROR: invalid input syntax for type money: "100500.42"

# Or it can succeed, but won't be able to be parsed back:
Product.last.price # => 0.0
```

::pgtype::

`money`

8 byte fixed-precision number.

::postgresql::

```sql
-- on production:
SELECT 100500.42::money;
-- $100,500.42

-- on dev machine:
SELECT 100500.42::money;
-- ¥ 100,500
-- 🤯 But it should be dollars, and where are my cents?
```

::footnote_ruby::

ActiveRecord has to parse textual representation, see [connection_adapters/postgresql/oid/money.rb](https://github.com/rails/rails/blob/f8e97a1464e0ab7feabf87f9da7fd9a86af509a0/activerecord/lib/active_record/connection_adapters/postgresql/oid/money.rb#L16-L36)

Also see [issue № 31457](https://github.com/rails/rails/issues/31457) for lots of pain.

::footnote_pg::

Both output and acceptable input format depends on session-level `lc_monetary` setting!

Precision is defined by `lc_monetary` at database creation time and can't be changed!

---
layout: comparison
---

## Strings and texts, lyrics and prose

::rubytype::

`String`

Variable size

::ruby::

```ruby
"こんにちは地球人！".encoding
# => #<Encoding:UTF-8>

"\xe3\x2e\x2e".encoding
# => #<Encoding:UTF-8>
"\xe3\x2e\x2e".valid_encoding?
# => false

"これ\x00やばい!".valid_encoding?
# => true
```

::pgtype::

`varchar`, `text`

variable size, max 1 GB

::postgresql::

```sql
SELECT 'こんにちは地球人！';
-- こんにちは地球人！

SELECT E'\xe3\x2e\x2e');
-- ERROR:  invalid byte sequence for encoding "UTF8": 0xe3 0x2e 0x2e



SELECT E'これ\x00やばい!';
-- ERROR:  invalid byte sequence for encoding "UTF8": 0x00
```

---
layout: center
class: text-2xl
---

Please, use <a href="https://utf8everywhere.org/">utf8everywhere.org</a>!

<qr-code url="https://utf8everywhere.org/"  caption="utf8everywhere.org" class="w-32 absolute bottom-10px right-10px" />

---
layout: comparison
---

## Binary data

::rubytype::

`String`

Variable size

::ruby::

```ruby
data = File.binread(“meme.png”)
# => "\x89PNG\r\n\x1A…"
data.encoding # => #<Encoding:ASCII-8BIT>
data.bytesize # => 46534

Test.last.blob
# => "\x89PNG\r\n\x1A…"
Test.last.blob_before_type_cast.bytesize
# => 46534
Test.last.blob_before_type_cast
# => "\\x89504e470d0a1a0a"
Test.last.blob_before_type_cast.bytesize
# => 93070
```

::pgtype::

`bytea`

Variable size, max 1 GB

::postgresql::

```
SELECT '\x89504e470d0a1a0a…'::bytea;

# Note hexadecimal format ↑
```

::footnote_ruby::

Memory and network traffic consumption: 🌚

::footnote_pg::

See [Binary Data Types](https://www.postgresql.org/docs/14/datatype-binary.html) page in the docs.

---

## What if 1 GB isn't enough?

You can't store more in a table column (hard limit)

But you can store up 4 TB in large objects table!

And there is a gem for that:

[active_storage-postgresql](https://github.com/lsylvester/active_storage-postgresql)

<div class="absolute bottom-5">
Beware performance implications of TOAST →
</div>

<Transform scale="0.67" origin="top right" class="min-w-550px absolute top-5 right-5">
  <Tweet id="1526922431780233218" />
</Transform>

<qr-code url="https://twitter.com/Envek/status/1526922431780233218" class="w-32 absolute bottom-10px right-10px" />

---
layout: comparison
---

## Dates

::rubytype::

`Date`

::ruby::

Internally stores number of days since year 4713 BC.

> The Julian day number is in elapsed days since noon (Greenwich Mean Time) on January 1, 4713 BCE (in the Julian calendar).
>
> The day count is virtually the astronomical Julian day number.

::pgtype::

`date`

4 bytes

::postgresql::

Internally stores number of days since year 4713 BC.

> In the Julian Date system, each day has a sequential number, starting from JD 0 (which is sometimes called the Julian Date). JD 0 corresponds to 1 January 4713 BC in the Julian calendar.

::footnote_ruby::

See the docs for [Date](https://ruby-doc.org/stdlib-3.1.2/libdoc/date/rdoc/Date.html#method-c-new) class.

::footnote_pg::

See [B.7. Julian Dates](https://www.postgresql.org/docs/14/datetime-julian-dates.html) in PostgreSQL docs.

---
layout: comparison
rubyRails: ruby-rails
---

## Time and timezones

::rubytype::

`Time`

`AS::TimeWithZone`

<small class="text-xs">Two UNIX timestamps inside and tzdata also</small>

::ruby::

```ruby
Time.now # => 2022-10-22 13:42:42 +0900
Time.current # => Sat, 22 Oct 2022 04:42:42 UTC +00:00

Time.current.time_zone
# => #<ActiveSupport::TimeZone name="UTC", @tzinfo=#<TZInfo::DataTimezone: Etc/UTC>>

Time.use_zone("Asia/Tokyo") { Time.current }
# => Sat, 22 Oct 2020 13:42:42 JST +09:00
```

::pgtype::

`timestamp`

`timestamptz`

8 bytes, microsecond precision

::postgresql::

```sql
CREATE TABLE tests (t1 timestamp, t2 timestamptz);
SET SESSION timezone TO 'Etc/UTC';
INSERT INTO tests (t1, t2) VALUES (now(), now());
SET SESSION timezone TO 'Asia/Tokyo';
INSERT INTO tests (t1, t2) VALUES (now(), now());
SET SESSION timezone TO 'Europe/Lisbon';
INSERT INTO tests (t1, t2) VALUES (now(), now());
SET SESSION timezone TO 'Asia/Tokyo';
SELECT * FROM tests;
┌────────────────────────────┬───────────────────────────────┐
│             t1             │              t2               │
╞════════════════════════════╪═══════════════════════════════╡
│ 2022-10-02 10:16:53.682997 │ 2022-10-02 19:16:53.682997+09 │
│ 2022-10-02 19:16:53.684923 │ 2022-10-02 19:16:53.684923+09 │
│ 2022-10-02 11:16:53.68649  │ 2022-10-02 19:16:53.68649+09  │
└────────────────────────────┴───────────────────────────────┘
```

::footnote_ruby::

Links

::footnote_pg::

Links

---
layout: center
---

## Time zones are hard

<Youtube id="-5wpm-gesOY" width="640" height="360" class="pt-10" />

<qr-code url="https://youtu.be/-5wpm-gesOY" class="w-32 absolute bottom-10px right-10px" />

---
layout: comparison
---

## Void and uncertainity

::rubytype::

`NilClass`

::ruby::

```ruby
nil == nil
# => true ¯\_(ツ)_/¯
```

::pgtype::

`NULL`

::postgresql::

```sql
SELECT NULL = NULL; -- NULL 🚨
SELECT NULL IS NULL; -- true
SELECT NULL IS DISTINCT FROM NULL; -- false

SELECT 'Ruby' = NULL; -- NULL 🚨
SELECT 'Ruby' IS NULL; -- false
SELECT 'Ruby' IS DISTINCT FROM NULL; -- true
```

---
layout: center
---

# PostgreSQL-specific datatypes

---
layout: comparison
---

## Ranges

::rubytype::

`Range`

::ruby::

```ruby
5..7 or 5...8
Time.current..1.day.from_now

# endless or beginless ranges
Time.current..
..Date.yesterday
nil.. or Range.new(nil, nil)

# Beginning is always included in Ruby :-(
Test.pluck("tstzrange(now(), now() + '1 hour', '()')").first
# ArgumentError: The Ruby Range object
# does not support excluding the beginning of a Range.
```

::pgtype::

`intrange`, `tsrange`, …

`intmultirange`, …

::postgresql::

```sql
SELECT int8range(5, 7, '[]'); -- [5,8]
SELECT int8range(5, 8); -- [5,8)
SELECT tstzrange(now(), now() + '1 day', '()');
-- ["2022-10-22 14:42:42+09","2022-10-23 14:42:42+09")

-- endless or beginless ranges
SELECT tstzrange(now(), NULL);
SELECT tstzrange(NULL, NULL);

-- PG 14: Multiranges and operators
SELECT nummultirange(numrange(1, 20))
     - nummultirange(numrange(4, 6));
-- {[1,4),[6,20)}
```

::footnote_ruby::

Additional methods in the [facets](https://github.com/rubyworks/facets) gem.

::footnote_pg::

https://www.postgresql.org/docs/14/rangetypes.html

---
layout: comparison
---

## UUID

<div class="absolute bottom-100px left-200px rotate-355">

Also take a look at [upcoming UUIDv6, v7, and v8](https://datatracker.ietf.org/doc/html/draft-peabody-dispatch-new-uuid-format-04)!
</div>
<qr-code url="https://datatracker.ietf.org/doc/html/draft-peabody-dispatch-new-uuid-format-04" class="w-32 absolute bottom-50px right-150px" />

::rubytype::

`String`

36 bytes

::ruby::

```ruby
# All-random UUIDv4
SecureRandom.uuid
# => “40f15398-4b38-4e16-8b3c-ff16fc960d38”

# Determined UUIDv5 (hash-based)
Digest::UUID.uuid_v5(Digest::UUID::DNS_NAMESPACE, "name")
# => "9b8edca0-90f2-5031-8e5d-3f708834696c"
```

::pgtype::

`uuid`

16 bytes

::postgresql::

```sql
CREATE EXTENSION "pgcrypto";
SELECT gen_random_uuid();
-- 2cfff962-4a24-4ef3-b2f8-35351b18bf63

CREATE EXTENSION "uuid-ossp";
SELECT uuid_generate_v5(uuid_ns_dns(), 'name');
-- 9b8edca0-90f2-5031-8e5d-3f708834696c
```

::footnote_ruby::

See Rails docs for [Digest::UUID](https://api.rubyonrails.org/v6.0.3/classes/Digest/UUID.html)

::footnote_pg::

See docs for [pgcrypto](https://www.postgresql.org/docs/14/pgcrypto.html) and [uuid-ossp](https://www.postgresql.org/docs/14/uuid-ossp.html) extensions.

---
layout: comparison
---

## IP addresses

::rubytype::

`IPAddr`

::ruby::

```ruby
ip6 = IPAddr.new "3ffe:505:2::1"
ip4 = IPAddr.new "192.168.2.0/24"

IPAddr.new("192.168.2.0/24").mask(16)
#<IPAddr: IPv4:192.168.0.0/255.255.0.0>


```

::pgtype::

`inet`, `cidr`

7 or 19 bytes both

::postgresql::

```sql
SELECT '::1'::inet;
SELECT '127.0.0.1/32'::inet;

SELECT set_masklen(cidr '192.168.1.0/24', 16);
-- 192.168.0.0/16

SELECT inet_merge(inet '192.168.1.5/24', inet '192.168.2.5/24');
-- 192.168.0.0/22
```

<small>

inet works with both host and network addresses.

cidr works with network addresses only.

</small>

::footnote_ruby::

See [IPAddr](https://ruby-doc.org/stdlib-3.1.0/libdoc/ipaddr/rdoc/IPAddr.html#method-i-mask) docs.

::footnote_pg::

See [Network address types](https://www.postgresql.org/docs/14/datatype-net-types.html) and [functions and operators](https://www.postgresql.org/docs/14/functions-net.html).

---
layout: comparison
rubyRails: rails
---

## Durations

::rubytype::

<small>

`ActiveSupport::Duration`

</small>

::ruby::

```ruby
Time.current + 1.year
# => Thu, 18 Jun 2021 21:00:00 MSK +03:00

100500.weeks.iso8601
# => "P100500W"

1.month.to_i
# => 2629746
```

::pgtype::

`interval`

16 bytes

::postgresql::

```sql
SELECT now() + ‘1 year’;
-- 2021-06-18 21:00:00+03

SELECT '100500 weeks'::interval;
-- 703500 days

SELECT EXTRACT(epoch FROM '1 month'::interval);
-- 2592000
```

::footnote_ruby::

Disclaimer: I added it to Rails in [pull request № 16919](https://github.com/rails/rails/pull/16919).

::footnote_pg::

PostgreSQL type support is available from Ruby on Rails 6.1+

<!--

-->

---
layout: cover
---

# Inside ActiveRecord

How datatypes are working under the hood

---

## Create custom datatype

Declare composite datatype in the database:

```sql
CREATE TYPE _true_money AS (
  currency varchar,
  amount numeric
);

CREATE DOMAIN true_money AS _true_money CHECK (
  value IS NULL AND
  value IS DISTINCT FROM (null, null)::_true_money OR
  ((value).currency IS NOT NULL AND (value).amount IS NOT NULL)
);
```

And use it:

```sql
ALTER TABLE tests ADD COLUMN price true_money;
INSERT INTO tests (price) VALUES ('("JPY",100.0)');
SELECT price FROM tests; -- (JPY,100.0)
```

---

## Declare it in ActiveRecord

```ruby
module ActiveRecord
  module ConnectionAdapters
    module PostgreSQL
      module OID
        class TrueMoney < Type::Value
          def type
            :true_money
          end

          # Here will be (de)serialization code
        end
      end
    end
  end
end
```

---

## Deserialization

```ruby
def deserialize(value)
  return nil if value.nil?

  currency, amount = value.match(/\A\("?(\w+)"?,(\d+(?:\.\d+)?)\)\z/).captures
  ::Money.from_amount(BigDecimal(amount), currency)
end
```

And `"(USD,4.2)"` in PG transforms to `#<Money fractional:420 currency:USD>` in Ruby ✨

---

## Casting user input

Add ability to assign ready object to attribute:

```ruby
def cast(value)
  return nil if value.nil?

  case value
    when ::Money then value
    when String then deserialize(value)
    else
      raise NotImplementedError, "Don't know how to cast #{value.class} #{value.inspect} into Money"
  end
end
```

---

## Deserialization and input casting at once

```ruby
def cast_value(value)
  case value
    when ::Money then value
    when String
      currency, amount = value.match(/\A\("?(\w+)"?,(\d+(?:\.\d+)?)\)\z/).captures
      ::Money.from_amount(BigDecimal(amount), currency)
    else
      raise NotImplementedError, "Don't know how to cast #{value.class} #{value.inspect} into Money"
    end
  end
end
```

Replaces both `deserialize` and `cast`, also handles `nil`s.

---

## Serialization for the database

```ruby
def serialize(value)
  return nil if value.nil? # ActiveRecord will handle NULL for us

  amount_t   = ::ActiveRecord::ConnectionAdapters::PostgreSQLAdapter::OID::Decimal.new
  currency_t = ::ActiveModel::Type::String.new
  "(#{currency_t.serialize(value.currency.iso_code).inspect},#{amount_t.serialize(value.amount)})"
end
```

Reuse available serialization methods for subtypes.

---

## Register datatype in ActiveRecord

```ruby
PostgreSQLAdapterWithTrueMoney = Module.new do
  def initialize_type_map(m = type_map)
    m.register_type "true_money" do |*_args, _sql_type|
      ::ActiveRecord::ConnectionAdapters::PostgreSQLAdapter::OID::TrueMoney.new
    end
    m.alias_type "_true_money", "true_money"

    super
  end
end

ActiveRecord::ConnectionAdapters::PostgreSQLAdapter.prepend(PostgreSQLAdapterWithTrueMoney)

ActiveRecord::Type.register(
  :true_money,
  ::ActiveRecord::ConnectionAdapters::PostgreSQLAdapter::OID::TrueMoney,
  adapter: :postgresql,
)
```

---

## Also add it for migrations…

```ruby
module SchemaStatementsWithTrueMoney
  def type_to_sql(type, limit: nil, precision: nil, scale: nil, array: nil, **)
    case type.to_s
    when 'true_money' then 'true_money'
    else super
    end
  end
end
ActiveRecord::ConnectionAdapters::PostgreSQL::SchemaStatements.prepend(SchemaStatementsWithTrueMoney)

module ActiveRecord::ConnectionAdapters::PostgreSQL::ColumnMethods
  def true_money(name, options = {})
    column(name, :true_money, options)
  end
end
```

---

## Ready to use!

```sh
rails g model Product title price:true_money
rails db:migrate
rails console
```

```ruby
Product.create!(title: "Something", price: Money.from_amount(100000, “USD”))
Product.last
# => #<Product id: 1, title: "Something", price: 100000.00 USD>
```

---
layout: footnote
---

## But it is not done yet!

<div class="grid grid-cols-2 gap-2">

<div>

A lot of stuff has to be done to make a full-featured datatype in SQL…

```sql
CREATE FUNCTION true_money_add(a true_money, b true_money) RETURNS true_money AS $$
  BEGIN
    IF (a).currency != (b).currency THEN
      RAISE EXCEPTION '% can not be added to % - currencies does not match', b, a;
    END IF;
    RETURN ((a).currency, (a).amount + (b).amount);
  END;
$$ IMMUTABLE RETURNS NULL ON NULL INPUT LANGUAGE plpgsql;

CREATE OPERATOR +(leftarg=true_money, rightarg=true_money, procedure=true_money_add);
```

</div>

```sql

CREATE FUNCTION true_money_sum(state true_money, value true_money) RETURNS true_money AS $$
  BEGIN
    IF value IS NULL AND state IS NULL THEN
      RETURN NULL;
    END IF;
    IF state IS NULL THEN
      RETURN value;
    END IF;
    RETURN state + value;
  END;
$$ IMMUTABLE LANGUAGE plpgsql;

CREATE AGGREGATE sum (true_money) (sfunc = true_money_sum, stype = true_money);
```
</div>

But then you can do a lot in SQL:

```sql
SELECT (price).currency AS currency, sum(price) AS total
FROM products GROUP BY currency;
```

::footnote::

After all, one might re-invent abandoned [pg-currency](https://github.com/samv/pg-currency)

---

## Play with it yourself!


<div class="text-center my-12">
<qr-code url="https://gist.github.com/Envek/780b917e72a86c123776ee763b8dd986" class="max-w-80 mx-auto" />
</div>

https://gist.github.com/Envek/780b917e72a86c123776ee763b8dd986

---
layout: cover
---

# Gems, gems, gems!

Everything That Can Be Invented Has Been Invented

---

## Gems for datatypes

- [activerecord-postgis-adapter](https://github.com/rgeo/activerecord-postgis-adapter) — all the power of PostGIS extension in Ruby.
- [activerecord-postgres_enum](https://github.com/bibendi/activerecord-postgres_enum) — support enum in migrations and schema
- [torque-postgresql](https://github.com/crashtech/torque-postgresql) — standard datatypes not (yet) supported by Rails.

---

## Gems for other PostgreSQL features

Because PostgreSQL is much more than datatypes.

- [fx](https://github.com/teoljungberg/fx) — make schema.rb great again with triggers
- [scenic](https://github.com/scenic-views/scenic) — add support for views
- [order_query](https://github.com/glebm/order_query) — keyset-pagination for your models
- [postgresql_cursor](https://github.com/afair/postgresql_cursor) — how to get more data from the database faster
- [ActiveRecordExtended](https://github.com/GeorgeKaraszi/ActiveRecordExtended) — functions for datatypes and DSL for queries.

And also martian [pg_trunk](https://github.com/nepalez/pg_trunk/) gem to ~~rule them all~~ get `fx`, `scenic` object dependency management and more within a single gem!

<qr-code url="https://github.com/nepalez/pg_trunk/" caption="pg_trunk gem" class="w-32 absolute bottom-10 right-10" />

---
layout: cover
---

# That's it!

Questions?

---

# Thank you!

<div class="grid grid-cols-[8rem_3fr_2fr] mt-16 gap-4">

<div class="justify-self-end">
<img alt="Andrey Novikov" src="https://secure.gravatar.com/avatar/d0e95abdd0aed671ebd0920c16d393d4?s=512" class="w-32 h-32 scaled-image" />
</div>

<ul class="list-none">
<li><a href="https://github.com/Envek"><logos-github-icon class="dark:invert" /> @Envek</a></li>
<li><a href="https://twitter.com/Envek"><logos-twitter /> @Envek</a></li>
<li><a href="https://facebook.com/Envek"><logos-facebook /> @Envek</a></li>
</ul>

<div>
<qr-code url="https://github.com/Envek" caption="github.com/Envek" class="w-32" />
</div>

<div class="justify-self-end">
<a href="https://evilmartians.com/"><img alt="Evil Martians" src="/images/01_Evil-Martians_Logo_v2.1_RGB.svg" class="w-32 h-32 scaled-image block dark:hidden" /><img alt="Evil Martians" src="/images/02_Evil-Martians_Logo_v2.1_RGB_for-Dark-BG.svg" class="w-32 h-32 scaled-image hidden dark:block" /></a>
</div>

<div>

- <logos-github-icon class="dark:invert" /> [@evilmartians](https://github.com/evilmartians?utm_source=kaigionrails&utm_medium=slides&utm_campaign=postgresql-as-seen-by-rubyists)
- <logos-twitter /> [@evilmartians](https://twitter.com/evilmartians/?utm_source=kaigionrails&utm_medium=slides&utm_campaign=postgresql-as-seen-by-rubyists)
- <logos-linkedin-icon /> [@evil-martians](https://www.linkedin.com/company/evil-martians/?utm_source=kaigionrails&utm_medium=slides&utm_campaign=postgresql-as-seen-by-rubyists)
- <logos-instagram-icon class="dark:invert" /> [@evil.martians](https://www.instagram.com/evil.martians/?utm_source=kaigionrails&utm_medium=slides&utm_campaign=postgresql-as-seen-by-rubyists)
</div>

<div>
<qr-code url="https://evilmartians.com/" caption="evilmartians.com" class="w-32" />
</div>

<div class="col-span-3">

Special attention to our awesome blog: [evilmartians.com/chronicles](https://evilmartians.com/chronicles/?utm_source=kaigionrails&utm_medium=slides&utm_campaign=postgresql-as-seen-by-rubyists)!

</div>
</div>

<style>
  ul a { border-bottom: none !important; }
  ul { list-style-type: none !important; }
  ul li { margin-left: 0; padding-left: 0; }
</style>
