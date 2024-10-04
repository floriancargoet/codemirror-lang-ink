# default sequence

{foo|bar}

==>

Story(MixedTextAndLogic("{",
  Sequence(
    MixedTextAndLogicInSequence(
      ContentText
    ),
    "|",
    MixedTextAndLogicInSequence(
      ContentText
    )
  ),
"}"))

# symbol sequence

{&foo|bar}
{!foo|bar}
{$foo|bar}
{~foo|bar}

==>

Story(
  MixedTextAndLogic("{",
    Sequence(
      SequenceOp,
      MixedTextAndLogicInSequence(
        ContentText
      ),
      "|",
      MixedTextAndLogicInSequence(
        ContentText
      )
    ),
  "}"),
  MixedTextAndLogic("{",
    Sequence(
      SequenceOp,
      MixedTextAndLogicInSequence(
        ContentText
      ),
      "|",
      MixedTextAndLogicInSequence(
        ContentText
      )
    ),
  "}"),
  MixedTextAndLogic("{",
    Sequence(
      SequenceOp,
      MixedTextAndLogicInSequence(
        ContentText
      ),
      "|",
      MixedTextAndLogicInSequence(
        ContentText
      )
    ),
  "}"),
  MixedTextAndLogic("{",
    Sequence(
      SequenceOp,
      MixedTextAndLogicInSequence(
        ContentText
      ),
      "|",
      MixedTextAndLogicInSequence(
        ContentText
      )
    ),
  "}"),
)

# empty items

{||foo|}

==>

Story(MixedTextAndLogic("{",
  Sequence(
    "|", "|",
    MixedTextAndLogicInSequence(
      ContentText
    ),
    "|",
  ),
"}"))

# keyword sequences


{once:foo|bar}
{cycle:foo|bar}
{shuffle:foo|bar}
{stopping:foo|bar}

==>
Story(
  MixedTextAndLogic("{",
    Sequence(
      SequenceTypeWordAnnotation(once), ":",
      MixedTextAndLogicInSequence(
        ContentText
      ),
      "|",
      MixedTextAndLogicInSequence(
        ContentText
      )
    ),
  "}"),
  MixedTextAndLogic("{",
    Sequence(
      SequenceTypeWordAnnotation(cycle), ":",
      MixedTextAndLogicInSequence(
        ContentText
      ),
      "|",
      MixedTextAndLogicInSequence(
        ContentText
      )
    ),
  "}"),
  MixedTextAndLogic("{",
    Sequence(
      SequenceTypeWordAnnotation(shuffle), ":",
      MixedTextAndLogicInSequence(
        ContentText
      ),
      "|",
      MixedTextAndLogicInSequence(
        ContentText
      )
    ),
  "}"),
  MixedTextAndLogic("{",
    Sequence(
      SequenceTypeWordAnnotation(stopping), ":",
      MixedTextAndLogicInSequence(
        ContentText
      ),
      "|",
      MixedTextAndLogicInSequence(
        ContentText
      )
    ),
  "}"),
)
