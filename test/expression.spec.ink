# Literals { "top": "Expressions" }

1
1.2
-3.14
- 3.14 // Unary minus followed by positive number
true
false
""
"foo"
"\""
"foo{bar}" // string with interpolation (more tests in string.spec.ink)
==>

Expressions(
    Expression(Integer),
    Expression(Float),
    Expression(Float),
    Expression("-", Float), LineComment,
    Expression(true),
    Expression(false),
    Expression(String),
    Expression(String),
    Expression(String),
    Expression(String(Interpolation("{", ExpressionVariableName(Identifier), "}"))), LineComment,
)

# simple unary expressions { "top": "Expressions" }

- 1
!true
not false

==>

Expressions(
    Expression("-", Integer),
    Expression("!", true),
    Expression("not", false),
)

# divert { "top": "Expressions" }

-> knot
-> knot.stitch
-> knot.stitch.gather
-> knot(1)
-> knot.stich(1, 2)

==>

Expressions(
    Expression(ExpressionDivertTarget(
      "->",
      DotSeparatedDivertPathComponents(Identifier)
    )),

    Expression(ExpressionDivertTarget(
      "->",
      DotSeparatedDivertPathComponents(Identifier, ".", Identifier)
    )),

    Expression(ExpressionDivertTarget(
      "->",
      DotSeparatedDivertPathComponents(Identifier, ".", Identifier, ".", Identifier)
    )),

    Expression(ExpressionDivertTarget(
      "->",
      DotSeparatedDivertPathComponents(Identifier),
      ExpressionFunctionCallArguments(
        "(",
        Integer,
        ")"
      )
    )),

    Expression(ExpressionDivertTarget(
      "->",
      DotSeparatedDivertPathComponents(Identifier, ".", Identifier),
      ExpressionFunctionCallArguments(
        "(",
        Integer,
        ",",
        Integer,
        ")"
      )
    )),
)

