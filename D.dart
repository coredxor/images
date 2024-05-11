import 'package:flutter/material.dart';
class D extends StatelessWidget {
  const D({super.key});
  Widget renderKey(BuildContext context, String key, Color color) {
    return Expanded(
      child: renderBtn(context,key,color)
    );
  }
  Widget renderBtn(BuildContext context, String key, Color color) {
    return InkWell(
      onTap: () {},
      child: Container(
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(8),
          color: color,
        ),
        margin: EdgeInsets.all(2),
        width: double.infinity,
        height: double.infinity,
        child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(
                key,
                style: TextStyle(
                  color: Color(0xFF303233),
                  fontSize: 16,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ]
        ),
      ),
    );
  }
  Widget renderRow1(BuildContext context) {
    return Container(
      height: 50,
      width: double.infinity,
      child: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            renderKey(context, 'AC', const Color(0xFFD8D8D8)),
            renderKey(context, ':', const Color(0xFFD8D8D8)),
            renderKey(context, 'X', const Color(0xFFD8D8D8)),
            renderKey(context, '<', const Color(0xFFD8D8D8))
          ]
      ),
    );
  }
  Widget renderRow2(BuildContext context) {
    return Container(
      height: 50,
      width: double.infinity,
      child: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            renderKey(context, '7', const Color(0xFFFFFFFF)),
            renderKey(context, '8', const Color(0xFFFFFFFF)),
            renderKey(context, '9', const Color(0xFFFFFFFF)),
            renderKey(context, '-', const Color(0xFFD8D8D8))
          ]
      ),
    );
  }
  Widget renderRow3(BuildContext context) {
    return Container(
      height: 50,
      width: double.infinity,
      child: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            renderKey(context, '4', const Color(0xFFFFFFFF)),
            renderKey(context, '5', const Color(0xFFFFFFFF)),
            renderKey(context, '6', const Color(0xFFFFFFFF)),
            renderKey(context, '+', const Color(0xFFD8D8D8))
          ]
      ),
    );
  }
  Widget renderRow4(BuildContext context) {
    return Expanded(
      child: Container(
        width: double.infinity,
        height: double.infinity,
        child: Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              renderKey(context, '1', Color(0xFFFFFFFF)),
              renderKey(context, '2', Color(0xFFFFFFFF)),
              renderKey(context, '3', Color(0xFFFFFFFF)),
            ]
        ),
      ),
    );
  }
  Widget renderRow5(BuildContext context) {
    return Container(
      height: 50,
      width: double.infinity,
      child: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Flexible(child: renderBtn(context, '000', Color(0xFFFFFFFF)), flex: 2),
            Flexible(child: renderBtn(context, '0', Color(0xFFFFFFFF)), flex: 1),
          ]
      ),
    );
  }
  Widget renderEqual(BuildContext context) {
    return renderBtn(context, '=', Color(0xFFD8D8D8));
  }
  Widget renderRow45(BuildContext context) {
    return Expanded(
      child: Container(
        width: double.infinity,
        height: double.infinity,
        child: Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Flexible(
                child: Container(
                  width: double.infinity,
                  height: double.infinity,
                  child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        renderRow4(context),
                        renderRow5(context),
                      ]
                  ),
                ),
                flex: 3
              ),
              Flexible(child: renderEqual(context), flex: 1,)
            ]
        ),
      ),
    );
  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Container(
          constraints: BoxConstraints.expand(),
          color: Color(0xFFFFFFFF),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Expanded(
                child: Container(
                  width: double.infinity,
                  height: double.infinity,
                  child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Text(
                          '1 + 1 = 2',
                          style: TextStyle(
                            color: Color(0xFF303233),
                            fontSize: 20,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                      ]
                  ),
                ),
              ),
              Container(
                color: Color(0xFFF9F9F9),
                height: 250,
                width: double.infinity,
                child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      renderRow1(context),
                      renderRow2(context),
                      renderRow3(context),
                      renderRow45(context),
                    ]
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
