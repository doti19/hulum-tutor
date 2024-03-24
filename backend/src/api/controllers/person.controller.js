const httpStatus = require("http-status");
const pick = require("../utils/pick");
const ApiError = require("../errors/api-error");
const catchAsync = require("../utils/catchAsync");
const { personService } = require("../services");

const createPerson = catchAsync(async (req, res) => {
  console.log('file in req', req.files);
  
    console.log('file size', req.files.resume.size);
    console.log('req body', req.body);
    
  const person = await personService.createPerson(req.body, req.files);
  res.status(httpStatus.CREATED).send(person);
});

const downloadResumeById = catchAsync(async (req, res)=>{
    const result = await personService.downloadResumeById(req.params.personId);
    console.log(result);
    res.setHeader("Content-Disposition", "attachment;");

    res.download(result.directoryPath, result.fileName,  (err)=>{
        if(err){
            res.status(500).send({
                message: "couldn't download file" + err
            });
        }
    })
}
);

const exportData = catchAsync(async(req, res)=>{
    const result = await personService.exportData();
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=registered_people.csv");
    res.status(200).end(result);
})

const getPeople = catchAsync(async (req, res) => {
  const filter = pick(req.query, [
    "firstName",
    "lastName",
    "gender",
    "teachingExperience",
    "city",
    "language",
  ]);
  const options = pick(req.query, ["sortBy", "limit", "page"]);
  const result = await personService.queryPeople(filter, options);
  res.send(result);
});

const getPerson = catchAsync(async (req, res) => {
  const user = await personService.getPersonById(req.params.personId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "Person not found");
  }
  res.send(user);
});

const updatePerson = catchAsync(async (req, res) => {
  const user = await personService.updatePersonById(
    req.params.personId,
    req.body
  );
  res.send(user);
});

const deletePerson = catchAsync(async (req, res) => {
    
  await personService.deletePersonById(req.params.personId);
  res.status(httpStatus.NO_CONTENT).send();
});

const search = catchAsync(async (req, res) => {
  // const filter = pick(req.query, ['name', 'role']);
  // const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await personService.search(req.params.keyword);
  // const result = await userService.queryUsers(filter, options);
  res.send(result);
});

module.exports = {
  createPerson,
  downloadResumeById,
  exportData,
  getPeople,
  getPerson,
  updatePerson,
  deletePerson,
  search,
};
