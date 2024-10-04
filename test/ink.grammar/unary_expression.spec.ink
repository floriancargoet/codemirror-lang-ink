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
  Integer,
  Float,
  Float,
  "-", Float, LineComment,
  true,
  false,
  String,
  String,
  String(StringEscape),
  String(Interpolation("{", ExpressionVariableName(Identifier), "}")), LineComment,
)

# simple unary expressions { "top": "Expressions" }

- 1
!true
not false

==>

Expressions(
  "-", Integer,
  "!", true,
  "not", false,
)

# divert { "top": "Expressions" }

-> knot
-> knot.stitch
-> knot.stitch.gather
-> knot(1)
-> knot.stich(1, 2)

==>

Expressions(
  ExpressionDivertTarget(
    "->",
    DotSeparatedDivertPathComponents(Identifier)
  ),

  ExpressionDivertTarget(
    "->",
    DotSeparatedDivertPathComponents(Identifier, ".", Identifier)
  ),

  ExpressionDivertTarget(
    "->",
    DotSeparatedDivertPathComponents(Identifier, ".", Identifier, ".", Identifier)
  ),

  ExpressionDivertTarget(
    "->",
    DotSeparatedDivertPathComponents(Identifier),
    ExpressionFunctionCallArguments(
      "(",
      Integer,
      ")"
    )
  ),

  ExpressionDivertTarget(
    "->",
    DotSeparatedDivertPathComponents(Identifier, ".", Identifier),
    ExpressionFunctionCallArguments(
      "(",
      Integer,
      ",",
      Integer,
      ")"
    )
  )
)

# list  { "top": "Expressions" }

(foo, bar)

==>

Expressions(ExpressionList(
  "(",
  ListMember(
    Identifier
  ),
  ",",
  ListMember(
    Identifier
  ),
  ")"
))

# variable { "top": "Expressions" }

foo
list.bar

==>

Expressions(
  ExpressionVariableName(Identifier),
  ExpressionVariableName(Identifier, ".", Identifier)
)

# inc/dec  { "top": "Expressions" }

foo++
bar--

==>

Expressions(
  ExpressionVariableName(Identifier), "++",
  ExpressionVariableName(Identifier), "--"
)

# func call { "top": "Expressions" }

foo(bar, 3)

==>

Expressions(
  ExpressionFunctionCall(
    Identifier,
    ExpressionFunctionCallArguments(
      "(",
      ExpressionVariableName(
        Identifier
      ),
      ",",
      Integer,
      ")"
    )
  )
)

