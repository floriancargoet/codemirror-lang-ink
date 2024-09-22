# Simple string

~ "some string" + "other string"

==>

Story(
  LogicLine("~",
    String, ArithOp, String
  )
)
 
# Interpolate string

~ "some {1 + 2} string {foo /* var */}"

==>

Story(
  LogicLine("~",
    String(
      Interpolation("{", 
        Integer, ArithOp, Integer, 
      "}"),
      Interpolation("{", 
        ExpressionVariableName(Identifier), 
        BlockComment
      "}")
    )
  )
)
 