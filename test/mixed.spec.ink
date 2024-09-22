# Mixed 

VAR bar=foo
 INCLUDE zip.ink
  TODO test this  

==>

Story(
  VariableDeclaration(
    VAR, Identifier, DeclarationEqual, ExpressionVariableName(Identifier)
  ), 
  IncludeStatement(INCLUDE, Included), 
  AuthorWarning(TODO)
)
