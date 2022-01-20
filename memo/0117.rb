# - 範囲オブジェクト0..16を使って、各要素の２乗を出力してください。
# - yeller（大声で叫ぶ）というメソッドを定義してください。
# このメソッドは、文字列の要素で構成された配列を受け取り、各要素を連結した後、大文字にして結果を返します。
# 例えばyeller(['o', 'l', 'd'])と実行したとき、"OLD"という結果が返ってくれば成功です。ヒント: mapとupcaseとjoinメソッドを使ってみましょう。
# - random_subdomainというメソッドを定義してください。
# このメソッドはランダムな8文字を生成し、文字列として返します。ヒント: サブドメインを作るときに使ったRubyコードをメソッド化したものです。
# - リスト 4.12の「?」の部分を、それぞれ適切なメソッドに置き換えてみてください。ヒント:split、shuffle、joinメソッドを組み合わせると、メソッドに渡された文字列（引数）をシャッフルさせることができます。

# (0..16).each { |i| puts i ** 2 }

# def yeller(array)
#   puts array.map(&:upcase).join
# end
# yeller(['a','b','c'])

# def ramdom_subdomain
#   puts ('a'..'z').to_a.shuffle[0..7].join
# end
# ramdom_subdomain

def string_shuffle(s)
  s.split('').shuffle.join
end
puts string_shuffle("abc")