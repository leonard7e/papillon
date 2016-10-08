module Sass::Script::Functions
  def goldenratio(base)
    assert_type base, :Number
    g = (1.0 + Math.sqrt(5.0))/2.0
    Sass::Script::Value::Number.new(g**(base.value))
  end
  declare :goldenratio, [:number]
end
