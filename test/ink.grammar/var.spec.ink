# VAR

VAR bar=foo

==>

Story(
   VariableDeclaration(
    VAR, Identifier, DeclarationEqual("="), ExpressionVariableName(Identifier)
  )
)

# VAR math

VAR bar = 1 + 1.2 * 7 mod 2

==>

Story(
   VariableDeclaration(
    VAR, Identifier, DeclarationEqual("="),
    BinaryExpression(
      Integer,
      ArithOp("+"),
      BinaryExpression(
        BinaryExpression(Float, ArithOp("*"), Integer),
        ArithOp(mod),
        Integer
      )
    )
  )
)
