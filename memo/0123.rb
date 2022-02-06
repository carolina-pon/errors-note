# ""はリテラルコンストラクタ　文字列のオブジェクトを暗黙で作成する
# 明示的に同等の名前付きコンストラクタを使用できる = new

# メソッドがクラス自身（この場合はnew）に対して呼び出されるとき、このメソッドをクラスメソッドと呼びます。
# クラスのnewメソッドを呼び出した結果は、そのクラスのオブジェクトであり、これはクラスのインスタンスとも呼ばれます。
# lengthのように、インスタンスに対して呼び出すメソッドはインスタンスメソッドと呼ばれます。

# class Word < String
#   def palindrome?
#     self == reverse
#   end
# end

class String
  def shuffle
    # self.split('').shuffle.join selfなくてもうごく！
    split('').shuffle.join
  end
end
puts "foobar".shuffle
