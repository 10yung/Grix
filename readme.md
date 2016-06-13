# Grix
------
Easy to use Grid system base on `flex` display property.

## Quick Start

You can import Grix inside your `<head> </head>` tag and you are good to go!


```<link rel="stylesheet" href="./dist/style/grix.min.css">```


------

* #### In Grix, you can use outer `div` to control number of inner `div`.####

    The following syntax can create 4 columns(each width 25% ) in one row.

```
<div class="gx-row gx-cols-4 gx-colml-4">
    <div>
        25% width
    </div>
    <div>
        25% width
    </div>
    <div>
         25% width
    </div>
    <div class="">
         25% width
    </div>
</div>
```

* #### There are also 4 kinds of Screen-size options in Grix. (inside gx-row)####

Small Screen (for screen < 768px)  => gx-cols-*

Medimun Screen and Large Screen (for screen > 768px)  => gx-colml-*

Medimun Screen (for screen > 768px and screen < 992px) => gx-colm-*

Large Screen (for screen > 992px) => gx-coll-*

* #### Vertical option also build inside Grix. Default with 10 rows within one column.####

here are some sample code.

```
<div class="gx-vert gx-fh">
    <div class="vh-1">
        height 11.11%
    </div>
    <div class="vh-1">
        height 11.11%
    </div>
    <div class="vh-1">
        height 11.11%
    </div>
    <div class="vh-1">
        height 11.11%
    </div>
    <div class="vh-1">
        height 11.11%
    </div>
    <div class="vh-1">
        height 11.11%
    </div>
    <div class="vh-1">
        height 11.11%
    </div>
    <div class="vh-1">
        height 11.11%
    </div>
    <div class="vh-1">
        height 11.11%
    </div>
    <div class="vh-1">
        height 11.11%
    </div>
</div>
```

## More detail

if you want to see more detail, please see my demo-page or download index.html file.


Thanks and enjoy!
