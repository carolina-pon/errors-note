# 文字列「A man, a plan, a canal, Panama」を ", " で分割して配列にし、変数aに代入してみてください。
# 今度は、変数aの要素を連結した結果（文字列）を、変数sに代入してみてください。
# 変数sを半角スペースで分割した後、もう一度連結して文字列にしてください（ヒント: メソッドチェーンを使うと１行でもできます）。リスト 4.10で使った回文をチェックするメソッドを使って、（現状ではまだ）変数sが回文ではないことを確認してください。downcaseメソッドを使って、s.downcaseは回文であることを確認してください。
def palindrome_tester(s = '')
  if s == s.reverse
    puts "It's a palindrome!"
  else
    puts "It's not a palindrome."
  end
end

a = "A man, a plan, a canal, Panama".split(',')
s = a.join
# sは回文である
palindrome_tester(s.split(' ').join.downcase)


# aからzまでの範囲オブジェクトを作成し、7番目の要素を取り出してみてください。
# 同様にして、後ろから７番目の要素を取り出してみてください。（ヒント: 範囲オブジェクトを配列に変換するのを忘れないでください）
a = ('a'..'z').to_a
a[6] #=> 7番目の要素
a[a.length-8] #=> 後ろから7番目の要素

{ |i| puts 2 * i } ブロック

