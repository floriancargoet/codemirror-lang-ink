# varname

~ foo
//

==>

Story(
  LogicLine("~",
    ExpressionVariableName(Identifier)
  ),
  LineComment
)

# inc/dec

~ foo++
~ foo--

==>

Story(
  LogicLine("~",
    ExpressionVariableName(Identifier), "++"
  ),
  LogicLine("~",
    ExpressionVariableName(Identifier), "--"
  )
)
