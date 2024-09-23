# Include

INCLUDE file.ink

==>

Story(
  IncludeStatement(INCLUDE, Included)
)

# Include with spaces

INCLUDE file.ink  /* INCLUDE read until EOL so this comment is inside the IncludeStatement */
   INCLUDE   file.ink
   
==>

Story(
  IncludeStatement(INCLUDE, Included, BlockComment),
  IncludeStatement(INCLUDE, Included)
)
 