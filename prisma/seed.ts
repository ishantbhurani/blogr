import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const password = await hash('test', 12)
  const user = await prisma.user.upsert({
    where: {
      email: 'test@test.com',
    },
    update: {},
    create: {
      name: 'Ivan',
      email: 'test@test.com',
      password,
    },
  })
  const newPost = await prisma.post.create({
    data: {
      title: '10 of the biggest — and smallest — scientific mysteries',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id velit viverra, maximus elit in, convallis dui. Suspendisse a orci accumsan, vulputate nisl at, molestie orci. Vestibulum sit amet orci vitae felis tincidunt fermentum. Suspendisse sagittis, ante iaculis vulputate blandit, lorem est mollis orci, at eleifend urna orci eu nisi. Aenean cursus quam consequat mi mollis placerat. Integer ac tempor metus. Nam eu eleifend ipsum. Morbi et enim ut augue luctus consectetur viverra eu sem. Sed in feugiat erat.
      
      Ut iaculis ligula eget nunc interdum, at hendrerit risus elementum. In convallis euismod nibh, nec fringilla arcu interdum non. Donec nec dapibus dui, ac congue est. Quisque lacinia id diam varius aliquet. Cras posuere commodo felis non hendrerit. Suspendisse pretium porttitor magna ut pharetra. Nam ultrices nisi non augue pulvinar, vel consequat elit sodales. Quisque accumsan sem vel commodo aliquam. Donec in leo laoreet, finibus nunc at, aliquam est. Nunc lobortis nibh sed nisi vulputate pretium.
      
      Sed vel molestie lacus. In pulvinar felis quis lacus vehicula aliquam. Sed turpis nisi, egestas a lacinia sed, egestas in justo. Phasellus lacinia urna eget dui tristique, eu facilisis tortor finibus. Morbi placerat hendrerit mi, in sodales tortor lobortis vel. Donec lobortis orci vel mauris scelerisque eleifend. Sed mattis nulla massa, sit amet mattis risus finibus ut.
      
      Vestibulum id dapibus dui, vel tristique est. Sed eget purus a dui dignissim posuere eleifend id felis. Etiam aliquam eget elit sed aliquam. Phasellus quis feugiat ex, eu suscipit felis. In nec risus neque. Proin eget ex quis lectus imperdiet dapibus. Curabitur placerat justo et nisi aliquet tristique. Morbi commodo lacus dui, ac vulputate nisl ullamcorper in. Integer vestibulum massa at facilisis luctus.
      
      Donec sit amet egestas elit, volutpat aliquam eros. Suspendisse bibendum, velit eget egestas tincidunt, libero lorem mattis lacus, ac condimentum est metus sit amet orci. Duis quis sapien sed dolor gravida porta. Morbi vel sapien ornare, ornare erat fringilla, volutpat ipsum. Nunc efficitur ex vel mauris aliquet rutrum. Vivamus nec tempus velit. Ut cursus vel lacus vel mollis. Curabitur nunc neque, malesuada a lacinia eget, viverra a turpis. Duis sit amet eleifend urna, ut porta libero. Aenean volutpat bibendum ex ac tincidunt. Quisque porttitor ante accumsan pretium lobortis.`,
      categories: ['Science'],
    },
  })

  console.log(newPost)
}

main()
  .then(() => prisma.$disconnect())
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
