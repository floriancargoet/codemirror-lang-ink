# Simple string

~ "some string" + "other string"

==>

Story(
  LogicLine("~",
    BinaryExpression(String, ArithOp("+"), String)
  )
)

# String escape

~ "newline \n tab \t quote \""

==>
Story(
  LogicLine("~",
    String(StringEscape, StringEscape, StringEscape)
  )
)

# Interpolate string

~ "some {1 + 2} string {foo /* var */}"

==>

Story(
  LogicLine("~",
    String(
      Interpolation("{",
        BinaryExpression(Integer, ArithOp("+"), Integer),
      "}"),
      Interpolation("{",
        ExpressionVariableName(Identifier),
        BlockComment
      "}")
    )
  )
)
