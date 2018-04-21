
install:
	npm install

zip:
	-rm file.zip
	zip -r file.zip *

deploy:
	echo "Deleteing old function"
	-aws lambda delete-function --region us-east-1 --function-name deletemeNOW
	echo "Creating old function"
	aws lambda create-function --region us-east-1 --function-name deletemeNOW --zip-file fileb://./file.zip --runtime nodejs4.3 --tracing-config Mode=Active --role arn:aws:iam::761861444952:role/wef_lambda_function --handler index.handler

test:
	node test.js

clean:
	-rm file.zip



