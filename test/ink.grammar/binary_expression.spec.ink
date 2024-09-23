# multiplication { "top": "Expressions" }

1 * 3.14

==>

Expressions(BinaryExpression(
  Integer, ArithOp("*"), Float
))

# division { "top": "Expressions" }

1 / 3.14

==>

Expressions(BinaryExpression(
  Integer, ArithOp("/"), Float
))

# addition { "top": "Expressions" }

1 + 3.14

==>

Expressions(BinaryExpression(
  Integer, ArithOp("+"), Float
))

# subtraction { "top": "Expressions" }

1 - 3.14

==>

Expressions(BinaryExpression(
  Integer, ArithOp("-"), Float
))


# modulo { "top": "Expressions" }

7%2
7 mod 2

==>

Expressions(
  BinaryExpression(
    Integer, ArithOp("%"), Integer
  ),
  BinaryExpression(
    Integer, ArithOp("mod"), Integer
  )
)

# */-+% precedence { "top": "Expressions" }

1 + 2 * 3 - 4 / 6 + 7 % 8
// (((1 + (2 * 3)) - (4 / 6)) + (7 % 8))

==>

Expressions(
  BinaryExpression(
    BinaryExpression(
      BinaryExpression(
        Integer,
        ArithOp(
          "+"
        ),
        BinaryExpression(
          Integer,
          ArithOp(
            "*"
          ),
          Integer
        )
      ),
      ArithOp(
        "-"
      ),
      BinaryExpression(
        Integer,
        ArithOp(
          "/"
        ),
        Integer
      )
    ),
    ArithOp(
      "+"
    ),
    BinaryExpression(
      Integer,
      ArithOp(
        "%"
      ),
      Integer
    )
  ),
  LineComment
)

# list operators { "top": "Expressions" }

list ? item
list has item
list !? item
list hasnt item
list1 ^ list2

==>

Expressions(
  BinaryExpression(
    ExpressionVariableName(Identifier),
    ListOp("?"),
    ExpressionVariableName(Identifier)
  ),
  BinaryExpression(
    ExpressionVariableName(Identifier),
    ListOp(has),
    ExpressionVariableName(Identifier)
  ),
  BinaryExpression(
    ExpressionVariableName(Identifier),
    ListOp("!?"),
    ExpressionVariableName(Identifier)
  ),
  BinaryExpression(
    ExpressionVariableName(Identifier),
    ListOp(hasnt),
    ExpressionVariableName(Identifier)
  ),
  BinaryExpression(
    ExpressionVariableName(Identifier),
    ListOp("^"),
    ExpressionVariableName(Identifier)
  )
)

# compare op { "top": "Expressions" }

1 <= 2
1 < 2
1 >= 2
1 > 2
1 == 2
1 != 2

==>

Expressions(
   BinaryExpression(
    Integer,
    CompareOp("<="),
    Integer
  ),
   BinaryExpression(
    Integer,
    CompareOp("<"),
    Integer
  ),
   BinaryExpression(
    Integer,
    CompareOp(">="),
    Integer
  ),
   BinaryExpression(
    Integer,
    CompareOp(">"),
    Integer
  ),
   BinaryExpression(
    Integer,
    CompareOp("=="),
    Integer
  ),
   BinaryExpression(
    Integer,
    CompareOp("!="),
    Integer
  ),
)

# logic op { "top": "Expressions" }

true || false && true and false or true

==>

Expressions(
  BinaryExpression(
    BinaryExpression(
      true,
      LogicOp("||"),
      BinaryExpression(
        BinaryExpression(
          false,
          LogicOp("&&"),
          true
        ),
        LogicOp(and),
        false
      )
    ),
    LogicOp(or),
    true
  )
)

