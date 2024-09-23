# Simple knot declaration

=== my_knot ===

==>

Story(
  KnotDeclaration(
    KnotTitleEquals,
    Identifier,
    KnotTitleEquals,
  )
)

# == knot declaration

== my_knot ==

==>

Story(
  KnotDeclaration(
    KnotTitleEquals,
    Identifier,
    KnotTitleEquals,
  )
)


# no trailing =

=== knot1

== knot2

==>

Story(
  KnotDeclaration(
    KnotTitleEquals,
    Identifier
  ),
  KnotDeclaration(
    KnotTitleEquals,
    Identifier
  )
)

# knot with params

== knot(param, ref param2)

==>
Story(
  KnotDeclaration(
    KnotTitleEquals,
    Identifier,
    BracketedKnotDeclArguments("(",
      Identifier,
      ",",
      ref, Identifier,
    ")")
  )
)


# simple stitch

= my_stitch =

==>

Story(
  StitchDeclaration(
    StitchTitleEquals,
    Identifier,
    StitchTitleEquals
  )
)

# no trailing =

= my_stitch

==>

Story(
  StitchDeclaration(
    StitchTitleEquals,
    Identifier
  )
)

# stitch with params

= my_stitch(param, ref param2)

==>

Story(
  StitchDeclaration(
    StitchTitleEquals,
    Identifier,
    BracketedKnotDeclArguments("(",
      Identifier,
      ",",
      ref, Identifier,
    ")")
  )
)

# stitches in knot (we don't nest)

=== knot
= stich1
= stich2

==>

Story(
  KnotDeclaration(
    KnotTitleEquals,
    Identifier
  ),
  StitchDeclaration(
    StitchTitleEquals,
    Identifier
  ),
  StitchDeclaration(
    StitchTitleEquals,
    Identifier
  )
)

# anonymous gathers

-
--
- - -

==>

Story(
  Gather(GatherDashes),
  Gather(GatherDashes),
  Gather(GatherDashes)
)

# named gathers

-(name)
--   (name)
- - - (  name )

==>

Story(
  Gather(GatherDashes, BracketedName("(", Identifier, ")")),
  Gather(GatherDashes, BracketedName("(", Identifier, ")")),
  Gather(GatherDashes, BracketedName("(", Identifier, ")"))
)
